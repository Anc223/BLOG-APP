import React, { useState } from 'react'
import './Addpost.css'

function Addpost() {
const [title,setTitle]=useState(" ")
const [post,setPost]=useState("")
  return (
    <div>
      <div className='crp-page'>
<form className='crp-main'>
  <div className='crp-tit'><h1>Create a new post</h1></div>
  <div className='crp-para'><p>This is the title that will displayed at the top of your blog.</p></div>
  <div className='crp-frm'>
    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'></input>
  </div>
  <div className='crp-len'>{title.length}/100</div><br/><br/>
  <div className='crp-txt'>
    <input type='text' value={post} onChange={(e)=>setPost(e.target.value)} placeholder='Add Text'></input>
  </div>
  <button class="crp-btn1">Save Draft</button>
  <button class="crp-btn2">Publish</button>
  </form>
</div>
    </div>
  )
}

export default Addpost