import Nav from '../Nav/Nav'
import { Header } from 'components/Header/Header'

function App() {
  const mass = ["О нас", "Оплата", "Контракты", "Отзывы", "Акция"]
  const navList = ['Бакалея', 'Сухофрукты', 'Овощи', 'Варенья и соленья', 'Сладости', 'Орехи', 'Грибы', 'Зелень', 'Ягоды и фрукты', 'Напитки', 'Молочные продукты', 'Морепродукты', 'Мясо']
  console.log(mass)
  return (<>
    <Header list={mass} navList={navList}></Header>
  </>
  )
}

export default App;
