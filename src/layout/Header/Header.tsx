import { Link } from "react-router-dom";
import { clearControls } from "../../features/controls/controlsSlice";
import { ThemeSwitcher } from "../../features/theme/ThemeSwitcher/ThemeSwitcher";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Container } from "../Container/Container";

import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useAppDispatch();

  const cleanUpControls = () => dispatch(clearControls);

  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header__wrapper']}>
          <Link to='/' className={styles['header__link']} onClick={cleanUpControls}>Where is the world?</Link>
          <ThemeSwitcher/>
        </div>
      </Container>
    </header>
  );
};
