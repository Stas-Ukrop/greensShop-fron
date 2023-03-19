import { Nav } from 'components/Nav/Nav';
import { NavList } from 'components/NavList/NavList';
import { InlogPanel } from 'components/InlogPanel/InlogPanel';
import styles from './Header.module.css';
export const Header = ({ list, navList, chidren }) => {
  return (
    <nav className={styles.navigation}>
      <Nav list={list} />
      <InlogPanel />
    </nav>
  );
};
