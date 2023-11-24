import React from 'react'
import styles from './item.module.css'

const Item = ({ foodItem, bought,handleBuyButton }) => {
  
  return (
    <div>
      <li className={`${styles['Sl-items']}  list-group-item ${bought && 'active'}`}>
       <span className={styles.span}>
        {foodItem}
        </span>
        <button onClick={handleBuyButton} className={`${styles.button} btn btn-info`}>Buy</button>
      </li>
    </div>
  )
}

export default Item