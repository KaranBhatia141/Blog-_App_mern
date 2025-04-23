import React from 'react';
import { useState } from 'react'; // react hook track the state
import axios from 'axios'; // help to send request 
import {useNavigate} from 'react-router-dom'; // help to navigate

export default function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });  // user  pass name state
    const navigate = useNavigate(); // navigate to differnt page 
    const handleChange = (e) => {    // this fun() call when data fill by user
      setFormData({ ...formData, [e.target.name]: e.target.value });   // form data stored when user fill 
    }
  
    const handleSubmit = async (e) => {  // handle submit call when form submit 
      e.preventDefault();
      try {
        const res = await axios.post('https://blog-app-mern-9um1.onrender.com' , formData);                //('http://localhost:8080/login', formData); // send req to server side 
        localStorage.setItem('token', res.data.token);  // saving user info in the token 
        alert('Login successful!');  // diaplay of sucesss
        navigate('/'); // navigate to home page 
    
      } catch (err) {  // err block 
        alert('Login failed: ' + err.response.data.message);  //diaplay of err
      }
    }
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit}  className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Login</h2>
       
        <div className="mb-4"> 

        <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
        <input name="username" placeholder="Username" onChange={handleChange} required  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div className='mb-4'>

         <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
      </form>
      </div>
    )
  }
  
   
  
