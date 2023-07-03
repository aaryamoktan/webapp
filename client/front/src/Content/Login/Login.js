import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const Login = () => {
  const [data,setdata] = useState({
    name:"",
    password:''
  })
  const inputhandle=(e)=>
  {
    setdata({...data,[e.target.name]:e.target.value})
  }
  const submit = (e)=>
  {
    e.preventDefault();
    axios.push("/login",{data}).then(()=>
    {
      console.log("welcomw to my world")
    })
    .catch((err)=>
    {
      console.log("hellow error")
    })
  }
 
  return (
    <>
      <div className='logincontainer'>
      <img src={require("../images/background.jpg")}/>
        <div className='loginform'>
          <form className='form' onSubmit={submit}>
            <div className='input'>
              <label>User Id</label>
              <br/>
              <input type="text"  name="name" onChange={inputhandle} required/>
              <br/>
              <label>Password</label>
              <br/>
              <input type="password" name="password" onChange={inputhandle} required/>
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