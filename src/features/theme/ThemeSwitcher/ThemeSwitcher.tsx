import React from 'react';
import { useTheme } from '../useTheme';

import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={styles['theme-switcher']} onClick={toggleTheme}>
      {theme === 'light' ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}
      <span className={styles['theme-switcher__label']}>{theme} Theme</span>
    </div>
  )
};
