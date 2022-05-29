import React from 'react';
import { useNeighbors } from './../useNeighbors';
import {CountryDetails} from './../../../types/details.types'
import { NavigateFunction } from 'react-router-dom';

import styles from './Info.module.scss';

export const Info: React.FC<CountryDetails & {push: NavigateFunction}> = ({push, ...props}) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = props;

  const neighbors: string[] = useNeighbors(borders);

  return (
    <section className={styles['info']}>
      <img src={flag} alt={name} className={styles['info__image']}/>
      <div>
        <h1 className={styles['info__title']}>{name}</h1>
        <div className={styles['list-group']}>
          <ul className={styles['list']}>
            <li className={styles['list__item']}>
              <b>Native Name:</b> {nativeName}
            </li>
            <li className={styles['list__item']}>
              <b>Population</b> {population}
            </li>
            <li className={styles['list__item']}>
              <b>Region:</b> {region}
            </li>
            <li className={styles['list__item']}>
              <b>Sub Region:</b> {subregion}
            </li>
            <li className={styles['list__item']}>
              <b>Capital:</b> {capital}
            </li>
          </ul>
          <ul className={styles['list']}>
            <li className={styles['list__item']}>
              <b>Top Level Domain</b>{' '}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </li>
            <li className={styles['list__item']}>
              <b>Currency</b>{' '}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </li>
            <li className={styles['list__item']}>
              <b>Top Level Domain</b>{' '}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </li>
          </ul>
        </div>
        <div className={styles['meta']}>
          <b>Border Countries</b>
          {!neighbors.length ? (
            <span>There is no border countries</span>
          ) : (
            <ul className={styles['tags']}>
              {neighbors.map((countryName) => (
                <li className={styles['tags__item']} key={countryName} onClick={() => push(`/country/${countryName}`)}>
                  {countryName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
