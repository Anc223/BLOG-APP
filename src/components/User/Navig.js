import React from 'react';
import '../User/Navig.css';
import { Link } from 'react-router-dom';

function Navig() {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="blogg">BLOGGER</a>
      <div class="navbar-nav">
        <Link to={"/"}>HOME</Link>
        <Link to={"/blogs"}>BLOGS</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/contact"}>CONTACT</Link>
        <Link to={'/login'}><button className='nav-bt'>LOGIN</button></Link>
      </div>
  </div>
</nav>

    </div>
  )
}

export default Navig