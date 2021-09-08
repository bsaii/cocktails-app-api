import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react';




const Error = () => {
  // setting up a time out function
  let history = useHistory();

  useEffect(() => {
      setTimeout(() => {
      history.push('/')
    },5000)
  }, []);


  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error
