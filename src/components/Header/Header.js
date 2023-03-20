import { Nav } from 'components/Nav/Nav';
import { InlogPanel } from 'components/InlogPanel/InlogPanel';
import styles from './Header.module.css';

export const Header = ({ list, navList, chidren }) => {
  return (
    <header className={styles.navigation}>
      <Nav list={list} />
      <InlogPanel />
    </header>
  );
};
