import { useRef, useState, useEffect } from "react";
import './Register.css'


const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="register__div register_page">
        <section className='register__section'>
          <h1 className='register__font'>Register</h1>
          <form onSubmit={handleSubmit} className='register__form'>
            <label htmlFor="username" className='register__font'>
              Username:
            </label>
            <input
            className='register__input'
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />

            <label htmlFor="password" className='register__font'>
              Password:
            </label>
            <input
            className='register__input'
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />

            <label htmlFor="confirm_pwd" className='register__font'>
              Confirm Password:
            </label>
            <input
            className='register__input'
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />

            <button className='register__font btn'>Sign Up</button>
          </form >
          <p className='register__font'>
            Already registered?<br />
            <span className="line">
              {/*put router link here*/}
              <a href="#" className='register__font'>Sign In</a>
            </span>
          </p>
        </section>
    </div>
  )
}

export default Register