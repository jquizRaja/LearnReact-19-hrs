import React from 'react'
import styles from './Display.module.css'

const Display = ({displayValue}) => {
  return (
    <input className={styles.display} id='dispaly' type='text' value={displayValue} readOnly/>  
  )
}

export default Display