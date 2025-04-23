import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios';
  

export default function Home() {
 const [posts , setPosts] = useState([]);  // track of post is display 

 useEffect(()=>{
  axios.get('https://blog-app-mern-9um1.onrender.com')                                      //('http://localhost:8080/')
  .then(res => setPosts(res.data))
  .catch(err => console.error(err));
 },[]);
  return (
    <div className="max-w-4xl mx-auto p-4">
    <Navbar />

      <h1 className="text-3xl font-bold mb-6 text-blue-600">Posts</h1>
        {posts.length === 0 ? (
          <p className="text-2xl font-semibold text-gray-800 mb-2">No post Avilable</p>      
            ):(
           posts.map(post=>(

             <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
          <p className="text-gray-600 line-clamp-3">By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</p>
          <p  className="text-blue-600 hover:underline mt-2 inline-block">{post.content}</p>
        </div>
          ))
          )}

    </div>

  )
}
