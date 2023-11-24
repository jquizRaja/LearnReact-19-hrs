import React from 'react'
import styles from './ButtonsContainer.module.css'

const ButtonsContainer = () => {
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  
  return (
    <div className={styles.buttonContainer} id='buttons-container'>
      {buttonNames.map((buttonName) => (
        <button className={styles.btn}>{ buttonName}</button>
      ))}
  </div>
  )
}

export default ButtonsContainer
