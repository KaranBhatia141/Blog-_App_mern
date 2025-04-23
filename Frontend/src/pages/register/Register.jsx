import { useState } from 'react'; // react hook that use to track the state of application
import axios from 'axios'; // it help to send request to server side 
import {useNavigate} from 'react-router-dom';  // hook help to navigate to different route or page

const Register = () => {  
  const [formData, setFormData] = useState({ username: '', password: '' });  //user info form data track 
  const navigate = useNavigate(); // help to navigate  differnt page

  const handleChange = (e) => {   // after submit form the this fuction call
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {  // form submit fuction 
    e.preventDefault();
    try {
      const res = await axios.post('https://blog-app-mern-9um1.onrender.com' , formData);  //('http://localhost:8080/register', formData) // sending response to backend 
      
      alert('Registered successfully');  // diaplay of sucess
      navigate('/login');
    } catch (err) {
      alert('Registration failed')  // display of faild
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Register</h2>

        
        <div className="mb-4">

     <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
      <input name="username" onChange={handleChange} placeholder="Username"  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        
        
        <div className="mb-4">

       <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
      <input name="password" type="password" onChange={handleChange} placeholder="Password"  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
      <button type="submit"  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Register</button>
    </form>
    </div>
  )
}

export default Register
