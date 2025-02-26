import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import img from './home.jpg'

function Home() {
  return (
    <div className='hm-bd'>
      <div class='hm-text'>
        <div className="hm-top">
        <div class='hm-hed'><h1>Publish your passions, your way</h1></div>
        <div class='hm-para'><p>Create a unique and wonderful blog easily.</p></div></div>
        <div className='hm-bottom'>
        <h1>Simple, meet flexible.</h1>
        <p>Whatever you're publishing. Whomever your audience is. Blogger makes it simple to get started. And easy to expand your site as your audience grows. More bloggers and independent creators choose Blogger than any other blogging tool. Tap into intuitive, flexible too;s that put writers, bloggers, and creators first.</p>
        <Link to={"/Createblog"}><button class='hm-btn'>CREATE YOUR BLOG</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home