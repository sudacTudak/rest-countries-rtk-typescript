import React from 'react';
import { Container } from '../Container/Container';
import styles from './Main.module.scss'

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => (
  <main className={styles['wrapper']}>
    <Container>
      {children}
    </Container>
  </main>
)
