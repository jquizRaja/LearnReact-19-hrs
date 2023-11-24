import React,{useState} from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContext } from './store/todo-items-store';

const App = () => {

  const [todoItems, setTodoItems] = useState([])
  
  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentValue) => {
      const newTodoItems = [...    currentValue, 
        {
        name: itemName,
        dueDate:itemDueDate,
        }
      ]
      return newTodoItems;
    })
  }
   
  const deleteItem =(todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems)
  }
  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem ,
       deleteItem,
    }}>
      <center className="todo-conatiner">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
};

export default App;