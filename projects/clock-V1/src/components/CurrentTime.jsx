import React from 'react';

const CurrentTime = () => {
const time= new Date()
  return (
    <div>
      <p className='lead'>
          current time is : {time.toLocaleDateString()} &nbsp;
      {time.toLocaleTimeString()} &nbsp;
      {time.getTimezoneOffset()} 
      </p>
  
    </div>
  )
}

export default CurrentTime
