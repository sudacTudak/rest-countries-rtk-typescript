import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Info } from '../Info/Info';
import { useDetails } from '../useDetails';

interface IDetailsProps {
  name: string;
  navigate: NavigateFunction
}

export const CountryDetails: React.FC<IDetailsProps> = ({name, navigate}) => {
  const { currentCountry, status, error } = useDetails(name);

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>Error! {error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};
