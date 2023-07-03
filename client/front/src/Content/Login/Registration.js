import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Registration = () => {
  const Navigate = useNavigate();
  const [data,setdata] =useState(
    {
      firstname:'',
      lastname:'',
      select:'',
      date:'',
      country:'',
      number:'',
      email:''
    }
  );
  const inputhandle = (e)=>
  {
    setdata({...data,[e.target.name]:e.target.value})
  }
  const submit =(e)=>
  {
    e.preventDefault();
    axios.post("/registration",{data}).then
    (()=>
    {
      console.log(data)
      alert("registrtion sucessfull")
    Navigate("/") 
    })
    .catch((err)=>
    {
      console.log(err)
    })
   
  }
  
  return (
    <>
      <div className='registrationContainer'>
      <img src={require("../images/background.jpg")}/>
        <div className='registration_form'>
          <form onSubmit={submit}>
            <label>First-Name:</label>
            <br />
            <input type="text" name="firstname" onChange={inputhandle} required></input>
            <br />
            <label>Last-Name:</label>
            <br />
            <input type="text" name="lastname" required onChange={inputhandle}></input>
            <br />
            <label>Gender:</label>
            <br/>
            <select name="select" onChange={inputhandle} required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <br />
            <label>Date_of_birth:</label>
            <br />
            <input type="date" name="date" onChange={inputhandle} required></input>
            <br />
            <label>Birth_Country:</label>
            <br />
            <input type="text" name="country" onChange={inputhandle} required></input>
            <br />
            <label>Number:</label>
            <br />
            <input type="Number" name="number" onChange={inputhandle} required></input>
            <br />
            <label>Email_id:</label>
            <br />
            <input type="email" name="email" onChange={inputhandle} required></input>
            <br/>
            <button type="submit">Registration</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registration