import { svg } from '../../images';
import styles from './NavList.module.css';
export const NavList = ({ navList }) => {
  const newArray = navList.map((el, index) => (
    <li key={index}>
      <img src={svg[index]} alt="React Logo" />
      {/* <span>{el}</span> */}
    </li>
  ));
  return <ul className={styles.main_nav}>{navList.length > 0 && newArray}</ul>;
};
