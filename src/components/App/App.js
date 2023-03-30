import { lazy } from 'react';
import styles from './App.module.css';
import { Header } from 'components/Header/Header';
import { NavList } from 'components/NavList/NavList';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className={styles.containerHeader}>
      <Header />
      <NavList class={styles.flexDir} />
      <main className={styles.blockMain}>
        <Routes>
          <Route path="/about" element={<div>kdfjhg</div>} />
          <Route path="/pay" element={<div>pay</div>} />
          <Route path="/contracts" element={<div>kdfjhg34</div>} />
          <Route path="/reviews" element={<div>kdfjhg23</div>} />
          <Route path="/promotion" element={<div>kdfjhg12</div>} />
          <Route path="/bakedGoods" element={<div>bakedGoods</div>} />
          <Route path="/bakedGoods/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/driedFruits" element={<div>kdfjhg</div>} />
          <Route path="/driedFruits/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/vegetables" element={<div>kdfjhg</div>} />
          <Route path="/vegetables/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/jamAndPickles" element={<div>kdfjhg</div>} />
          <Route path="/jamAndPickles/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/sweets" element={<div>kdfjhg</div>} />
          <Route path="/sweets/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/nuts" element={<div>kdfjhg</div>} />
          <Route path="/nuts/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/mooshrooms" element={<div>kdfjhg</div>} />
          <Route path="/mooshrooms/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/greens" element={<div>kdfjhg</div>} />
          <Route path="/greens/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/berryAndFruits" element={<div>kdfjhg</div>} />
          <Route path="/berryAndFruits/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/drinks" element={<div>kdfjhg</div>} />
          <Route path="/drinks/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/milks" element={<div>kdfjhg</div>} />
          <Route path="/milks/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/fish" element={<div>kdfjhg</div>} />
          <Route path="/fish/:id" element={<div>kdfjhg</div>}></Route>
          <Route path="/meat" element={<div>kdfjhg</div>} />
          <Route path="/meat/:id" element={<div>kdfjhg</div>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
