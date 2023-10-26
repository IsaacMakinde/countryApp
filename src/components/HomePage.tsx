import React, { useState, useEffect } from "react";
import { Country } from "../models/country.class";
import CountrySearchResults from "./CountrySearchResults";
import CountryService, { IServiceResponse } from "../services/CountryService";
import { FetchClient } from "../serviceClients/fetchClient";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [validInput, setValidInput] = useState(true);

  const [currentSearchMode, setCurrentSearchMode] = useState<string>("Name");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log(query);
    setValidInput(isAlphanumeric(query));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentSearchMode(event.target.value);
    console.log(currentSearchMode);
  };

  const handleSearch = async () => {
    if (!(query.trim() === "") && isAlphanumeric(query)) {
      setValidInput(true);
      console.log("searching", { query, currentSearchMode });
      await fetchCountry(query, currentSearchMode);
    } else {
      setValidInput(false);
    }
  };

  const fetchCountry = async (query: string, mode: string) => {
    setLoading(true);
    try {
      const countryService = new CountryService(FetchClient);
      let serviceResponse: IServiceResponse<Country | Country[]>;
      switch (mode) {
        case 'Name':
          serviceResponse = await countryService.getCountriesByName(query);
          break;
        case 'Code':
          serviceResponse = await countryService.getCountryByCode(query);
          break;
        case 'Language':
          serviceResponse = await countryService.getCountriesByLanguage(query);
          break;
        default:
          throw new Error('Invalid search mode');
      }
      handleSearchResults(serviceResponse);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSearchResults = (serviceResponse: IServiceResponse<Country | Country[]>) => {
    const { data, error } = serviceResponse;
    if (error) {
      console.error(`An error occurred: ${error}`);
      // Handle the error on the UI, maybe set an error state
    } else if (Array.isArray(data)) {
      setResults(data.length === 0 ? [] : data);
    } else {
      setResults(data ? [data] : []);
    }
    setLoading(false);  // Always set loading to false after handling results
  };

  const isAlphanumeric = (str: string) => /^[A-Za-z\s.'-]+$/.test(str);

  useEffect(() => {
    setLoading(false);
    console.log("from use effect", results);
    console.log("from use effect", loading);
  }, [results]);

  return (
    <div className="container is-widescreen">
      <h2 className="title">CountryWiki</h2>
      <div className="columns is-flex is-flex-direction-column">
        <div className="column">
          <div className="box">
            <div className="field is-grouped">
              <input
                className={`input ${validInput ? "is-info" : "is-danger"}`}
                maxLength={20}
                onChange={handleInputChange}
                placeholder="Input a Country"
                value={query}
              />
              <button className="button is-info" onClick={handleSearch}>Search</button>
              <select value={currentSearchMode} onChange={handleSelectChange}>
                <option value="Name">Name</option>
                <option value="Code">Code</option>
                <option value="Language">Language</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column">{results.length} Result(s)</div>
        <div className="column">
          <CountrySearchResults results={results} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
