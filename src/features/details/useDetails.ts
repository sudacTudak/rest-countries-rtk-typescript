import { useEffect } from "react";

import { loadCountryByName } from "./detailsThunks";
import { clearDetails } from "./detailsSlice";
import { selectCountryDetails } from "./detailsSelectors";
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();

  const details = useAppSelector(selectCountryDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);

  return details;
};
