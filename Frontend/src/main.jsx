import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // react rendering featrure that help to work on complex application
import './index.css'  // 
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // it used to enable client side routring route link

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
    <App />
  
  </BrowserRouter>
  
)
