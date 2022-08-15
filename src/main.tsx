import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LandingPage from './landingPageComponents/landingPage'
import SideBar from "./SidebarComponents/sidebar"
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    {/* <SideBar />
    <LandingPage /> */}
    
  </React.StrictMode>
)
