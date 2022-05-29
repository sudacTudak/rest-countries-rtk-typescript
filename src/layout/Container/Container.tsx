import React from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={styles['container']}>
    {children}
  </div>
)
