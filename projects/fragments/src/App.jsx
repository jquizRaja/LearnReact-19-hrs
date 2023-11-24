import React,{useState} from 'react';
import './App.css';
import Container from './components/Container';
import ErrorMessage from './components/ErrorMessage';
import FoodInput from './components/FoodInput';
import FoodItems from './components/FoodItems';

const App = () => {
  let [foodItems, setFoodItems] = useState([])

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value=""
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
    }
  }

  return (
    <div>
    <Container>
    <h1 className='food-heading'>Healthy  Foods</h1>
      <FoodInput handlekeyDown={onKeyDown}/>
      <FoodItems items={foodItems} />
      <ErrorMessage items={ foodItems} />
      </Container>
    </div>
  )
}

export default App