import { Country } from "../models/country.class";
import CountryCard from "./CountryCard";

interface CountrySearchResultsProps {
  results: Country[];
  loading: boolean;
}

const CountrySearchResults = (props: CountrySearchResultsProps) => {
  const { results, loading } = props;

  return (
    <div className="row columns is-multiline is-three-thirds-mobile">
      {loading ? (
        <p>Loading...</p>
      ) : (
        results.map((country) => (
          <div key={country.ccn3} className="column">
            <CountryCard country={country} />
          </div>
        ))
      )}
    </div>
  );
};

export default CountrySearchResults;
