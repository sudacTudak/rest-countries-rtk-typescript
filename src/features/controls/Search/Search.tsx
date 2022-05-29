import styles from './Search.module.scss';

import { IoSearch } from 'react-icons/io5';

interface SearchProps {
  search: string,
  handleSearch: (search: string) => void
}

export const Search: React.FC<SearchProps> = ({ search, handleSearch }) => {
  return (
    <label className={styles['search']}>
      <IoSearch />
      <input
        type='search'
        placeholder='Search for a country...'
        value={search}
        className={styles['search__input']}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </label>
  );
};
