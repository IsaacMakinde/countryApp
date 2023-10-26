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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log(query);
    setValidInput(isAlphanumeric(query));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentSearchMode(event.target.value);
    console.log(currentSearchMode);
  };

  const handleSearch = async (query: string, mode: string) => {
    if (!(query.trim() === "") && isAlphanumeric(query)) {
      setValidInput(true);
      console.log("searching", { query, mode });
      if (mode === "Name") {
        await fetchCountryByName(query);
      } else if (mode === "Code") {
        await fetchCountryByCode(query);
      } else if (mode === "Language") {
        await fetchCountryByLanguage(query);
      }
    } else {
      setValidInput(false);
    }
  };

  const fetchCountryByName = async (name: string) => {
    try {
      const countryService = new CountryService(FetchClient);
      const countries: Country[] = await countryService.getCountriesByName(
        name
      );
      if (countries.status === 404) {
        setResults([]);
      } else {
        setResults(countries);
        setLoading(false);
      }
      console.log("from new name func", results);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const fetchCountryByCode = async (code: string) => {
    try {
      const countryService = new CountryService(FetchClient);
      const country: Country = await countryService.getCountryByCode(code);
      if (country.status === 404) {
        setResults([]);
      } else {
        setResults([country]);
        setLoading(false);
      }
      console.log("from new code", results);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const fetchCountryByLanguage = async (language: string) => {
    try {
      const countryService = new CountryService(FetchClient);
      const countries: Country[] = await countryService.getCountriesByLanguage(
        language
      );
      if (countries.status === 404) {
        setResults([]);
      } else {
        setResults(countries);
        setLoading(false);
      }
      console.log("from new language", results);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const isAlphanumeric = (str: string) => /^[a-zA-Z0-9]+$/.test(str);

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
              <p className="control is-expanded">
                <input
                  className={`input ${validInput ? "is-info" : "is-danger"}`}
                  placeholder="Input a Country"
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                />
              </p>
              <p className="control">
                <button
                  className="button is-info"
                  onClick={() => handleSearch(query, currentSearchMode)}
                >
                  Search
                </button>
              </p>
              <div className="select">
                <select value={currentSearchMode} onChange={handleSelectChange}>
                  <option value="Name">Name</option>
                  <option value="Code">Code</option>
                  <option value="Language">Language</option>
                </select>
              </div>
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
