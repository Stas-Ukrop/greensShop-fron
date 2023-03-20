import styles from './Nav.module.css';
export const Nav = ({ list }) => {
  const newArray = list.map((el, index) => (
    <li key={index}>
      <a href="/">{el}</a>
    </li>
  ));

  return <ul className={styles.flex_text}>{list.length > 0 && newArray}</ul>;
};
