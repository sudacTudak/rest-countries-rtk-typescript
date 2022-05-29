import { RootState } from '../../store';

export const selectCountryDetails = (state: RootState) => ({
  currentCountry: state.details.currentCountry,
  status: state.details.status,
  error: state.details.error,
});

export const selectCountryNeighbors = (state: RootState) => state.details.neighbors;
