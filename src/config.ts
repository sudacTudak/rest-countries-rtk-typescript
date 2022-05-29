const BASE_URL = 'https://restcountries.com/v2/';

export const API = {
  ALL_COUNTRIES: BASE_URL + 'all?fields=name,capital,flags,population,region',
  searchByCountry: (name: string) => BASE_URL + 'name/' + name,
  filterByCode: (codes: string[]) => BASE_URL + 'alpha?codes=' + codes.join(',')
}
