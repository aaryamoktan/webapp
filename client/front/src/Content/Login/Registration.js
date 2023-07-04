import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Registration = () => {
  const Navigate = useNavigate();
  const [data, setdata] = useState(
    {
      firstname: '', lastname: '', select: '', date: '', country: '', number: '', email: '', password: ''
    }
  );
  const inputhandle = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }
  const submit = async(e) => {
    e.preventDefault();
    const {firstname,lastname,select,date,country,number,email,password} = data;
    const res = axios.post("/registration",{
      firstname,lastname,select,date,country,number,email,password
    }
    )
  }

  return (
    <>
      <div className='registrationContainer'>
        <img src={require("../images/background.jpg")} />
        <div className='registration_form'>
          <form method="POST" onSubmit={submit}>
            <label>First-Name:</label>
            <br />
            <input type="text" name="firstname" onChange={inputhandle} value={data.firstname} required></input>
            <br />
            <label>Last-Name:</label>
            <br />
            <input type="text" name="lastname" required onChange={inputhandle} value={data.lastname}></input>
            <br />
            <label>Gender:</label>
            <br />
            <select name="select" onChange={inputhandle} value={data.select} required>
            <option >Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <br />
            <label>Date_of_birth:</label>
            <br />
            <input type="date" name="date" onChange={inputhandle} value={data.date} required></input>
            <br />
            <label>Birth_Country:</label>
            <br />
            <input type="text" name="country" onChange={inputhandle} value={data.country} required></input>
            <br />
            <label>Number:</label>
            <br />
            <input type="Number" name="number" onChange={inputhandle} value={data.number} required></input>
            <br />
            <label>Email_id:</label>
            <br />
            <input type="email" name="email" onChange={inputhandle} value={data.email} required></input>
            <br />
            <label>Password:</label>
            <br />
            <input type="password" name="password" onChange={inputhandle} value={data.password} required></input>
            <br />
            <button type="submit">Registration</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registration