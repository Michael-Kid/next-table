import React from 'react';

const Loader = () => {
  return (
    <div className='vh-100 d-flex flex-column justify-content-md-center align-items-md-center'>
      <div
        className='spinner-border text-primary'
        role='status'
        style={{width: '6rem', height: '6rem'}}
      />
    </div>
  )
}

export default Loader;