import { VscAccount } from 'react-icons/vsc';
import { CgShoppingCart } from 'react-icons/cg';
import styles from './InLogPanel.module.css';
export const InlogPanel = () => {
  return (
    <>
      <ul className={styles.flexText}>
        <li>
          <input type="text" placeholder="введите ваш запрос" />
        </li>
        <li className={styles.headerMainMenuClientItem}>
          <VscAccount />
        </li>
        <li className={styles.headerMainMenuClientItem}>
          <CgShoppingCart />
        </li>
      </ul>
    </>
  );
};
