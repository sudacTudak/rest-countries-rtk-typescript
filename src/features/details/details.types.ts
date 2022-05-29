import { CountryDetails } from '../../types/details.types';

export interface DetailsState {
  currentCountry: CountryDetails | null,
  status: 'idle' | 'loading' | 'received' | 'rejected',
  error: null | string,
  neighbors: string[]
}
