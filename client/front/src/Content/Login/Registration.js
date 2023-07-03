import React from 'react'
import { useNavigate } from 'react-router-dom'
const Registration = () => {
  const Navigate = useNavigate();
  const submit =()=>
  {
    alert("registrtion sucessfull")
    Navigate("/")
  }
  return (
    <>
      <div className='registrationContainer'>
      <img src={require("../images/background.jpg")}/>
        <div className='registration_form'>
          <form onSubmit={submit}>
            <label>First-Name:</label>
            <br />
            <input type="text" name="firstname" required></input>
            <br />
            <label>Last-Name:</label>
            <br />
            <input type="text" name="lastname" required></input>
            <br />
            <label>Gender:</label>
            <br/>
            <select name="select" required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <br />
            <label>Date_of_birth:</label>
            <br />
            <input type="date" name="date" required></input>
            <br />
            <label>Birth_Country:</label>
            <br />
            <input type="text" name="country" required></input>
            <br />
            <label>Number:</label>
            <br />
            <input type="Number" name="number" required></input>
            <br />
            <label>Email_id:</label>
            <br />
            <input type="email" name="email" required></input>
            <br/>
            <button type="submit">Registration</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registration