import { NavLink } from 'react-router-dom';
import { svg } from '../../images';
import styles from './NavList.module.css';
export const NavList = () => {
  return (
    <ul className={styles.main_nav}>
      <li>
        <NavLink to="/bakedGoods" className={styles.styleLink}>
          <img src={svg[0]} alt="bakedGoods" />
          <span className={styles.navListSpan}>Бакалея</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/driedFruits" className={styles.styleLink}>
          <img src={svg[1]} alt="driedFruits" />
          <span className={styles.navListSpan}>Сухофрукты</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/vegetables" className={styles.styleLink}>
          <img src={svg[2]} alt="vegetables" />
          <span className={styles.navListSpan}>Овощи</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/jamAndPickles" className={styles.styleLink}>
          <img src={svg[3]} alt="jamAndPickles" />
          <span className={styles.navListSpan}>Варенья и соленья</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/sweets" className={styles.styleLink}>
          <img src={svg[4]} alt="sweets" />
          <span className={styles.navListSpan}>Сладости</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/nuts" className={styles.styleLink}>
          <img src={svg[5]} alt="nuts" />
          <span className={styles.navListSpan}>Орехи</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/mooshrooms" className={styles.styleLink}>
          <img src={svg[6]} alt="mooshrooms" />
          <span className={styles.navListSpan}>Грибы</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/greens" className={styles.styleLink}>
          <img src={svg[7]} alt="greens" />
          <span className={styles.navListSpan}>Зелень</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/berryAndFruits" className={styles.styleLink}>
          <img src={svg[8]} alt="berryAndFruits" />
          <span className={styles.navListSpan}>Ягоды и фрукты</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/drinks" className={styles.styleLink}>
          <img src={svg[9]} alt="drinks" />
          <span className={styles.navListSpan}>Напитки</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/milks" className={styles.styleLink}>
          <img src={svg[10]} alt="milks" />
          <span className={styles.navListSpan}>Молочные продукты</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/fish" className={styles.styleLink}>
          <img src={svg[11]} alt="fish" />
          <span className={styles.navListSpan}>Морепродукты</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/meat" className={styles.styleLink}>
          <img src={svg[12]} alt="meat" />
          <span className={styles.navListSpan}>Мясо</span>
        </NavLink>
      </li>
    </ul>
  );
};
