import React from 'react'
import { useRef, useState, useEffect } from 'react'
import './Login.css'

const Login = () => {
  const userRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');


  useEffect(() => {
    userRef.current.focus();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className='login__div login_page'>
      <section className='login__section'>
        <h1 className='login__font'>Sign In</h1>
        <form className='login__form' onSubmit={handleSubmit}>
          <label htmlFor='username' className='login__font'>Username:</label>
          <input
            className='login__input'
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor='password' className='login__font'>Password:</label>
          <input
            className='login__input'
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button className='login__font btn'>Sign In</button>
        </form>
        <p className='login__font'>
          Need an Account?<br />
          <span className="line">
            <span className='login__font'>Sign Up</span>
          </span>
        </p>
      </section>
    </div>
  )
}

export default Login