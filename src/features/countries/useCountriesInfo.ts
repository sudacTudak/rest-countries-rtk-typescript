import { useEffect } from "react";
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectFilteredCountries } from "./countriesSelectors";
import { selectCountriesInfo } from "./countriesSelectors";
import { useControls } from "../controls/useControls";
import { loadCountries } from "./countriesThunks";

import { Country } from '../../types/country.types';
import { CountiresStatus } from './countries.types';

type UseCountriesInfo = [Country[], {status: CountiresStatus, error: string | null, quantity: number}]

export const useCountriesInfo = () => {
  const dispatch = useAppDispatch();
  const { status, error, quantity } = useAppSelector(selectCountriesInfo);
  const [controls] = useControls();
  const countries = useAppSelector((state) =>
    selectFilteredCountries(state, controls)
  );

  useEffect(() => {
    if (quantity === 0) {
      dispatch(loadCountries());
    }
  }, [quantity, dispatch]);

  return [countries, { status, error, quantity }] as UseCountriesInfo;
};
