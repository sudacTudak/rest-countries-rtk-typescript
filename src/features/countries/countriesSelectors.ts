import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { selectAllControls } from '../controls/controlsSelectors';

const selectAllCountries = (state: RootState) => {
  return state.countries.entities;
}

export const selectCountriesInfo = (state: RootState) => ({
  status: state.countries.status,
  error: state.countries.error,
  quantity: state.countries.entities.length,
});

export const selectFilteredCountries = createSelector(
  [selectAllCountries, selectAllControls],
  (countries, controls) => {
    const {region, search} = controls;

    if (region === 'All') {
      return countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    };

    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(search.toLowerCase()) &&
        country.region.toLowerCase() === region.toLowerCase()
    );
  }
);
