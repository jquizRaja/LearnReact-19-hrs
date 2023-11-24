import React from 'react';
import Random from './Random';

const Hello = () => {
  let myName='Rajabhatti'
  let number= 455
  let myAddress=()=>{
    return "American White House"
  }
  return (
  <div>
  <h2>hello this is future speaking. i m your master {myName}.I lives in    {myAddress()}
    </h2>
  <p>Note Please this is Message: <Random /> </p>
  <p>Note Please this is Message: <Random /> </p>
  <p>Note Please this is Message: <Random/> </p>
  <p>Note Please this is Message: <Random/> </p>
  
  </div>
  )
}

export default Hello