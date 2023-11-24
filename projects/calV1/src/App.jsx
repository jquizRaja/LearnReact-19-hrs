import React from 'react'
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'


const App = () => {
  return (
    <div className={styles.calculator}>
    <Display/>
     <ButtonsContainer/>
    </div>
  )
}

export default App