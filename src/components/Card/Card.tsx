import styles from './Card.module.scss';
import cn from 'classnames';

interface CardProps {
  img: string,
  name: string,
  info: {
    title: string,
    description: string,
  }[],
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({img, name, info, onClick}) => (
  <article className={cn(styles['card'])} onClick={onClick}>
    <img src={img} alt={name} className={cn(styles['card__image'])}/>
    <div className={cn(styles['card__body'])}>
      <h3 className={cn(styles['card__title'])}>{name}</h3>
      <ul className={cn(styles['card__list'])}>
        {info.map(item => (
          <li key={item.title} className={cn(styles['list__item'])}>
            <b>{item.title}:</b> {item.description}
          </li>
        ))}
      </ul>
    </div>
  </article>
)
