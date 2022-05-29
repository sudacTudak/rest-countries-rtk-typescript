import styles from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({children, onClick}) => (
  <button className={cn(styles['button'])} onClick={onClick}>
    {children}
  </button>
)
