import { RootState } from '../../store';
import { ControlsState } from '../controls/controls.types';

export const selectCountriesInfo = (state: RootState) => ({
  status: state.countries.status,
  error: state.countries.error,
  quantity: state.countries.entities.length,
});

export const selectFilteredCountries = (state: RootState, { search, region}: ControlsState) => {
  const countries = state.countries.entities;

  if (region === "All") {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.toLowerCase() === region.toLowerCase()
  );
};
