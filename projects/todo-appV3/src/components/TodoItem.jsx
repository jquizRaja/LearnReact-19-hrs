import React from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItem = ({todoDate, todoName }) => {
  const { deleteItem } =useContext(TodoItemsContext );
  return (
    <div className="container">
      <div className="row sl-row">
        <div className="col-6">{ todoName }
        </div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger sl-btn"
            onClick={() => deleteItem(todoName)}>
            <HiArchiveBoxXMark size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
