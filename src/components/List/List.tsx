import styles from './List.module.scss';

interface ListProps {
  children: React.ReactNode
}

export const List: React.FC<ListProps> = ({ children }) => (
  <section className={styles['countries']}>
    {children}
  </section>
)
