import React,{useReducer} from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContext }  from './store/todo-items-store';

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === 'NEW_ITEM') {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate:action.payload.itemDueDate,
      }
    ]
    
  } else if (action.type === 'DELETE_ITEM') { 
    newTodoItems = currTodoItems.filter(item => item.name !== action.payload.itemName);
  }
  return newTodoItems;
}

const App = () => {
  const [todoItems, dispatchtodoItems] = useReducer(todoItemsReducer, [])
  
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: 'NEW_ITEM',
      payload: {
        itemName,
        itemDueDate,
      }
    }
    dispatchtodoItems(newItemAction)
  }
   
  const deleteItem =(todoItemName) => {

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName
      }
    }
    dispatchtodoItems(deleteItemAction)
  }
  return (
    <TodoItemsContext.Provider value={ {
      todoItems,
      addNewItem,
      deleteItem,
    } } >
      <center className="todo-conatiner">
        <AppName/>
        <AddTodo/>
        <WelcomeMessage/>
        <TodoItems/>
      </center>
    </TodoItemsContext.Provider>
  );
};

export default App;