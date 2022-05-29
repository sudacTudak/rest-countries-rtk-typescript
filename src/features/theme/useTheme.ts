import { useEffect } from "react";
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import { switchTheme } from "./themeSlice";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.color);

  const toggleTheme = () => {
    dispatch(switchTheme(theme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme] as ['light' | 'dark', () => void];
};
