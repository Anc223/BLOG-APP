import React, {useState } from 'react';
import './signup.css';
import axios from 'axios';
import img from './pexels-photo-961402.webp'

export default function Signup() {
    const [name,setName]=useState({username:'', email:'', age:'', contact:'',password:'', confirmpassword:''});

    function change(e){
      setName ({...name,[e.target.name]: e.target.value});
    }
  
    const submit=(e)=>{

        axios.post(`http://localhost:4000/adduser`,name)
        
        .then((res)=>{
            console.log(name);

            console.log(res);
            // setData(res.data)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })

      e.preventDefault()
      console.log(name)
    }
    return (
        <div className='bg-full'>
        <div className='snup-bg'>
        <form onSubmit={submit}>
            <div className='header'>SIGNUP</div>
            <div className='username'>
                <input type='textbox' placeholder='Username' size={30} name='username' value={name.username} onChange={change} required /><br /><br /></div>
            <div className='email'>
                <input type='textbox' placeholder='Email' size={30} name='email' value={name.email} onChange={change} required /><br /><br /></div>
            <div className='age'>
                <input type='textbox' placeholder='Age' size={30} name='age' value={name.age} onChange={change} required /><br /><br /></div>
                {/* <label for="gender">Select Gender</label>
                <select id="gender" name='gender'>
                  <option value="male">Male</option>
                  <input type='textbox' id='male' value={name.gender} name='gender' onChange={change} required /><br/><br/>
                  <option value="female">Female</option>
                  <input type='textbox' id='female' value={name.gender} name='gender' onChange={change} required /><br/><br/>
                </select><br/><br/> */}
                <div className='contact'>
                <input type='textbox' placeholder='Contact' size={30} name='contact' value={name.contact} onChange={change} required /><br /><br /></div>
                <div className='pswd1'>
                <input type='password' placeholder='Password' size={30} name='password' value={name.password} onChange={change} required /><br /><br /></div>
            <div className='pswd2'>
                <input type='password' placeholder='Confirm Password' size={30} name='confirmpassword' value={name.confirmpassword} onChange={change} required /><br /><br /></div>
            <button className='snup-btn'>SIGNUP</button>
        </form>
        </div>
        </div>
    )
}
