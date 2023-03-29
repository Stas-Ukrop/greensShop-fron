import { Nav } from 'components/Nav/Nav';
import { InlogPanel } from 'components/InlogPanel/InlogPanel';
import styles from './Header.module.css';

export const Header = ({ chidren }) => {
  return (
    <header className={styles.navigation}>
      <Nav />
      <InlogPanel />
    </header>
  );
};
