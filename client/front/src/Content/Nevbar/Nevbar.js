import React from 'react'
import { Link } from 'react-router-dom'
const img =require("../images/logo.png")
const Nevbar = () => {
  return (
   <>
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <Link to="/">
      <div className='img'>
        <img src={img} alt=""/>
      </div>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/">Pricing</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Nevbar