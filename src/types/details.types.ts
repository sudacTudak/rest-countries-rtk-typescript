interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface CountryDetails {
    name: string;
    nativeName: string;
    flag: string;
    capital: string;
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];
    currencies: Currency[];
    languages: Language[];
    borders: string[];
}
