import React, { useState, useEffect } from 'react'  
import { useNavigate, Link } from 'react-router-dom';  // link is clint side naviagtion without reloading 


export default function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // track of login state


    useEffect(() => {  //used to handle the side effects such as fetching data and updating DOM
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = async () => {
        // Remove token from localStorage
        localStorage.removeItem('token'); //a browser API that allows storing data locally within the user's browser, persisting across sessions and even browser restarts

        setIsLoggedIn(false);

        // Redirect to login
        navigate('/login');
    };

    return (
        <nav className="bg-white border-b shadow">
            <Link to="/"><h2 className="text-2xl font-bold text-blue-600">Blog-App</h2></Link>

            {isLoggedIn ? (

                <>
                     <li  className="text-gray-700 hover:text-blue-600 font-medium"> ><Link to='/post'>CreatePost</Link></li>
                    <li  className="text-gray-700 hover:text-blue-600 font-medium">><button onClick={handleLogout}>Logout</button></li>
                </>

            ) : (

                <>
                  <li  className="text-gray-700 hover:text-blue-600 font-medium">><Link to="/login">Login</Link></li>
                   <li  className="text-gray-700 hover:text-blue-600 font-medium">><Link to="/register">Register</Link></li>
                  </>
               )}

        </nav>
    );
}
