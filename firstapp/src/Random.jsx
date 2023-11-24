import React from 'react';

const Random = () => {
  let number= Math.random()*100
  return (
    <div >
    <h1 style={{'backgroundColor':"#973322"}}>
     Number= {Math.round(number)}
    </h1>
     
    </div>
  )
}

export default Random
