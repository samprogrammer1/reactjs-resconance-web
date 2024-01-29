import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section id='not-found'>
      <div className='not-found container d-flex justify-content-center align-items-center  w-100'>
        <div className='text-center'>
          <h1><span>404</span></h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to="/">
                      <button className="regiser-btn" type="button">
                        Back To Home
                      </button>
                    </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound