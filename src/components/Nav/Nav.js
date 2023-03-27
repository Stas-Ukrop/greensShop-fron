import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
export const Nav = ({ list }) => {
  return (
    <>
      <ul className={styles.flex_text}>
        <li>
          <NavLink to="/about">О нас</NavLink>
        </li>
        <li>
          <NavLink to="/pay">Оплата</NavLink>
        </li>
        <li>
          <NavLink to="/contracts">Контракты</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Отзывы</NavLink>
        </li>
        <li>
          <NavLink to="/promotion">Акция</NavLink>
        </li>
      </ul>
    </>
  );
};
