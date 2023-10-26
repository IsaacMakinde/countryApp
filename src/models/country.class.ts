export type Country = {
  name: Name;
  capital: string[];
  region: string;
  subregion: string;
  languages: Languages;
  population: number;
  flags: Flags;
  coatOfArms: Arms;
  independent: boolean;
  currencies: Currencies;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  unMember: boolean;
  translations: { [key: string]: Translation };
  maps: Maps;
  border: string[];
};

export type Currencies = {
  [key: string]: CurrencyInfo;
};

export type CurrencyInfo = {
  name: string;
  symbol: string;
};

export type Flags = {
  png: string;
  svg: string;
  alt: string;
};

export type Arms = {
  png: string;
  svg: string;
};

export type Languages = {
  [key: string]: string;
};

export type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

export type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

export type NativeName = {
  eng: Translation;
};

export type Translation = {
  official: string;
  common: string;
};
