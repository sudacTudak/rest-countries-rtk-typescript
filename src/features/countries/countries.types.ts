import { Country } from '../../types/country.types';

export type CountiresStatus = 'idle' | 'loading' | 'received' | 'rejected';

export interface CountriesState {
  entities: Country[],
  status: CountiresStatus,
  error: string | null
}
