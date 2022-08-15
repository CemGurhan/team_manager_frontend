import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LandingPage from './landingPageComponents/landingPage'
import SideBar from "./SidebarComponents/sidebar"
import UserProfilePage from "./UserProfilePage/userprofile"
import ProjectProfilePage from "./ProjectProfilePage/projectprofile"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from './Projects/projects'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <SideBar/>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/user' element={<UserProfilePage />} />
          <Route path='/project' element={<ProjectProfilePage />} />
          {/* <Route path='users' element={<UsersPage>} /> */}
          <Route path='/projects' element={<Projects />} />
          
          
            
        </Routes>

    </>
    
  )
}

export default App
