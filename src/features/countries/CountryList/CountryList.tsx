import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCountriesInfo } from './../useCountriesInfo';

import { List } from '../../../components/List/List';
import { Card } from '../../../components/Card/Card';

export const CountryList: React.FC = () => {
  const navigate = useNavigate();
  const [countries, { error, status }] = useCountriesInfo();


  if (error) {
    return <h2>Sorry. Some error was occured: {error}</h2>
  }

  return (
    <>
      {status === 'received' && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
