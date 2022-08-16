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
import UserList from './UserListPage/UserListPage'



function App() {
  const [count, setCount] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <> 
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/userprofile' element={<UserProfilePage />} />
          <Route path='/projectprofile' element={<ProjectProfilePage />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/projects' element={<Projects />} />


        </Routes>

    </>
    
  )
}

export default App
