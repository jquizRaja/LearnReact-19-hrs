import React from 'react';

const ErrorMessage = ({items}) => {

  return (
    <div>
    {items.length === 0 && <h3>Im hungry</h3>}
    </div>
  )
}

export default ErrorMessage
