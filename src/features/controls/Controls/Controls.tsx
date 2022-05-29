import {RegionOptions, SelectOption, Regions} from './../controls.types';
import { Search } from './../Search/Search';
import { CustomSelect } from './../CustomSelect/CustomSelect';
import { useControls } from './../useControls';

import styles from './Controls.module.scss';
import { GroupBase, StylesConfig, OnChangeValue } from 'react-select';

export type isMultiType = true | false;

const optionsMap: RegionOptions = {
  'All': { value: 'All', label: 'All'},
  'Africa': { value: 'Africa', label: 'Africa' },
  'Americas': { value: 'Americas', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
}
const options = Object.values(optionsMap);

const selectStyles: StylesConfig<
  SelectOption,
  isMultiType,
  GroupBase<SelectOption>
> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'var(--colors-ui-base)',
    color: 'var(--colors-text)',
    borderRadius: 'var(--radii)',
    padding: '0.25rem',
    border: 'none',
    boxShadow: 'var(--shadow)',
    height: '50px',
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    cursor: 'pointer',
    color: 'var(--colors-text)',
    backgroundColor: isSelected
      ? 'var(--colors-bg)'
      : 'var(--colors-ui-base)',
  }),
}

export const Controls = () => {
  const [controls, handleSearch, handleRegion] = useControls();

  const changeRegion = (newValue: OnChangeValue<SelectOption, isMultiType>) => {
    if (!newValue) {
      return;
    }

    handleRegion(newValue as SelectOption);
  }

  return (
    <div className={styles['controls']}>
      <Search search={controls.search} handleSearch={handleSearch}/>
      <div className={styles['select-wrapper']}>
        <CustomSelect
          className={styles['select']}
          placeholder="Filter by Region"
          styles={selectStyles}
          options={options}
          value={optionsMap[controls.region]}
          isClearable={controls.region !== Regions.All}
          isSearchable={false}
          isMulti={false}
          onChange={changeRegion}
        />
      </div>
    </div>
  );
};
