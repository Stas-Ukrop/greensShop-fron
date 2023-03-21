import styles from './App.module.css';
import { Header } from 'components/Header/Header';
import { NavList } from 'components/NavList/NavList';
import { Dashboard } from 'components/Dashboard/Dashboard';
import RegisterView from 'components/RegisterView/RegisterView';
import { useState } from 'react';
function App() {
  const [registr, setRegister] = useState(1);
  const mass = ['О нас', 'Оплата', 'Контракты', 'Отзывы', 'Акция'];
  const navList = [
    'Бакалея',
    'Сухофрукты',
    'Овощи',
    'Варенья и соленья',
    'Сладости',
    'Орехи',
    'Грибы',
    'Зелень',
    'Ягоды и фрукты',
    'Напитки',
    'Молочные продукты',
    'Морепродукты',
    'Мясо',
  ];
  return (
    <div className={styles.containerHeader}>
      <Header list={mass} navList={navList}></Header>
      <NavList navList={navList} />
      {registr ? <RegisterView /> : null}
    </div>
  );
}

export default App;
