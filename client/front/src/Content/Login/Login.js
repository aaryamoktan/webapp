import React from 'react'
import Registration from './Registration'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className='logincontainer'>
      <img src={require("../images/background.jpg")}/>
        <div className='loginform'>
          <form className='form'>
            <div className='input'>
              <label>User Id</label>
              <br/>
              <input type="text"  name="name"/>
              <br/>
              <label>Password</label>
              <br/>
              <input type="password" name="password"/>
              <br/>
              <button type="submit">Login</button>
            </div>
          </form>
          <div className='reg'>
          <p>If you dont have account plz create first</p>
          <Link to="/registration"><button type="submit">Registration</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login