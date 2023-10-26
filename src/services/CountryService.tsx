import FetchClient from "../serviceClients/fetchClient";
class CountryService {
  private httpClient: FetchClient;
  constructor(httpClient: FetchClient) {
    this.httpClient = httpClient;
  }

  async getAllCountries() {
    try {
      const response = await this.httpClient.get(
        "http://localhost:5001/countries/all"
      );
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getCountriesByName(name: string) {
    try {
      const response = await this.httpClient.get(
        `http://localhost:5001/countries/name/${name}`
      );
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getCountriesByLanguage(language: string) {
    try {
      const response = await this.httpClient.get(
        `http://localhost:5001/countries/language/${language}`
      );
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getCountryByCode(code: string) {
    try {
      const response = await this.httpClient.get(
        `http://localhost:5001/countries/code/${code}`
      );
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default CountryService;
