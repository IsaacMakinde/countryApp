                                                        import { Country } from "../models/country.class";
import CountryCard from "./CountryCard"; // Import the CountryCard component

interface CountrySearchResultsProps {
  results: Country[];
  loading: boolean;
}
const CountrySearchResults: React.FC<CountrySearchResultsProps> = ({
  results,
  loading,
}) => {
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
