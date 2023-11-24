import React from 'react'
import styles from './FoodInput.module.css'

const FoodInput = ({handlekeyDown}) => {

  return (
    <div className={styles.input}>
      <input onKeyDown={handlekeyDown} type="text" placeholder='Enter Your Demand here'/>
    </div>
  )
}

export default FoodInput
