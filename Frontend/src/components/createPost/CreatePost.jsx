import React, { useState } from 'react' //React Hook that allows functional components to manage state. 
import axios from 'axios'; // help to send request clint through server
import {useNavigate} from 'react-router-dom'; // use navigate  redirect the location

export default function CreatePost() {
    const navigate = useNavigate();
    const[formData, setformData] = useState({
        title:'',
        content:'',
        author:'',
    });

    const handleChange = (e)=>{   // storing data 
        setformData({...formData , [e.target.name]:e.target.value});
    };
     
    const handleSubmit= async (e)=>{  
        e.preventDefault();
     try{
        await axios.post('http://localhost:8080/posts', formData);  // sending data to backend
        alert('Post created');
        navigate('/');
     }catch(err){
        console.error(err);
        alert('Error creating post');
     }
    };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
       <h2 className="text-2xl font-bold text-blue-600 mb-4">Create Post</h2>
       
       <div className="mb-4">

    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={formData.title}
      onChange={handleChange}
      required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Content</label>
    <textarea
      name="content"
      placeholder="Content"
      rows="5"
      value={formData.content}
      onChange={handleChange}
      required
                className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     <label htmlFor="author" className="block text-gray-700 font-medium mb-2">Author</label>
    <input
      type="text"
      name="author"
      placeholder="Author"
      value={formData.author}
      onChange={handleChange}
      required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Create Post</button>
      </div>
  </form>
  )
}

