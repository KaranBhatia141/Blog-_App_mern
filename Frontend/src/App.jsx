import React from 'react'
import {Route, Routes} from 'react-router-dom';//it used to provide navigate between different path
import Register from './pages/Register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import CreatePost from './components/createPost/CreatePost';


export default function App() {
  return (
    <Routes>
      <Route element={<Register />} path='/register'/>
      <Route element={<Login />} path='/login'/>
      <Route element={<Home />} path='/'/>
      <Route element={<CreatePost />} path='/post'/>
      </Routes>
  )
}

