import styles from './App.module.css';
import { Header } from 'components/Header/Header';
import { NavList } from 'components/NavList/NavList';
import { NavLink, Route, Routes } from 'react-router-dom';
function App() {
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
      <Header navList={navList}></Header>
      <div className={styles.flexDir}>
        <NavList navList={navList} />
        <main className={styles.blockMain}>
          <Routes>
            <Route path="/about" element={<div>kdfjhg</div>} />
            <Route path="/pay" element={<div>pay</div>} />
            <Route path="/contracts" element={<div>kdfjhg34</div>} />
            <Route path="/reviews" element={<div>kdfjhg23</div>} />
            <Route path="/promotion" element={<div>kdfjhg12</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
