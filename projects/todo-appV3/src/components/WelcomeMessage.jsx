import React from 'react'
import styles from './WelcomeMessage.module.css'
import { TodoItemsContext } from '../store/todo-items-store'
import { useContext } from 'react'

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext)
  return (
    todoItems.length === 0 &&
    <div className={styles.message}>
      <h1>Enjoy your Day</h1>
        <p>
          If you are New? Add list item
        </p>
    </div>
  )
}
export default WelcomeMessage