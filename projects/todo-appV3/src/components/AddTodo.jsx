import React, { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from '../store/todo-items-store'
import { useContext } from 'react'

const AddTodo = () => {
  const {addNewItem} = useContext(TodoItemsContext)
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked} className="row sl-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="date" />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success sl-btn">
            <BiMessageAdd size={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
