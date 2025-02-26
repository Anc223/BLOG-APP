import React from 'react'
import './Createblog.css'

function Createblog() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
  <div class="cb-container-fluid">
    <a class="navbar-brand">BLOGGER</a>
  </div>
</nav>
    <div className='vert-nav'>
    <a class="nav-link" href="#">Posts</a>
    <a class="nav-link" href="#">Drafts</a>
    <a class="nav-link" href="#">Comments</a>
    <a class="nav-link" href="#">Settings</a>
    </div>
    </div>
  )
}

export default Createblog