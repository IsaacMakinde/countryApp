import { Country } from "../models/country.class";
import { IFetchClient } from "../serviceClients/fetchClient";

export interface IServiceResponse<T> {
  data: T | null;
  error: string | null;
}

class CountryService {
  private httpClient: IFetchClient;
  constructor(httpClient: IFetchClient) {
    this.httpClient = httpClient;
  }

  async getCountriesByName(name: string): Promise<IServiceResponse<Country[]>> {
    try {
      const response = await this.httpClient.get(
        `https://countrynodejs-1c8a69fb5708.herokuapp.com/countries/name/${name}`
      );
      if (!response.ok) {
        return {
          data: null,
          error: `Error ${response.status}: ${response.statusText}`,
        };
      }
      return { data: await response.json(), error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error: "Network Error" };
    }
  }

  async getCountriesByLanguage(
    language: string
  ): Promise<IServiceResponse<Country[]>> {
    try {
      const response = await this.httpClient.get(
        `https://countrynodejs-1c8a69fb5708.herokuapp.com/countries/language/${language}`
      );
      if (!response.ok) {
        return {
          data: null,
          error: `Error ${response.status}: ${response.statusText}`,
        };
      }
      return { data: await response.json(), error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error: "Network Error" };
    }
  }

  async getCountryByCode(code: string): Promise<IServiceResponse<Country>> {
    try {
      const response = await this.httpClient.get(
        `https://countrynodejs-1c8a69fb5708.herokuapp.com/countries/code/${code}`
      );
      if (!response.ok) {
        return {
          data: null,
          error: `Error ${response.status}: ${response.statusText}`,
        };
      }
      return { data: await response.json(), error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error: "Network Error" };
    }
  }
}

export default CountryService;
