import React, { useState, useEffect } from "react";
import { Country } from "../models/country.class";
import CountrySearchResults from "./CountrySearchResults";
import FetchClient from "../serviceClients/fetchClient";
import CountryService from "../services/CountryService";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [validInput, setValidInput] = useState(true);
  const [currentSearchMode, setCurrentSearchMode] = useState<string>("Name");

  const countryService = new CountryService(FetchClient);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCurrentSearchMode(e.target.value);

  const fetchCountry = async (query: string, mode: string) => {
    setLoading(true);
    try {
      let fetchResult: Country[] | Country;
      if (mode === "Name") fetchResult = await countryService.getCountriesByName(query);
      else if (mode === "Code") fetchResult = await countryService.getCountryByCode(query);
      else fetchResult = await countryService.getCountriesByLanguage(query);
      
      Array.isArray(fetchResult) ? setResults(fetchResult) : setResults([fetchResult]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (query.trim() && /^[a-zA-Z0-9]+$/.test(query)) {
      setValidInput(true);
      await fetchCountry(query, currentSearchMode);
    } else {
      setValidInput(false);
    }
  };

  useEffect(() => setLoading(false), [results]);

  return (
    <div className="container is-widescreen">
      <h2 className="title">CountryWiki</h2>
      <div className="columns is-flex is-flex-direction-column">
        <div className="column">
          <div className="box">
            <div className="field is-grouped">
              <input className={`input ${validInput ? "is-info" : "is-danger"}`} placeholder="Input a Country" type="text" value={query} onChange={handleInputChange} />
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
