import "./sidebar.css"
import StatsButton from '../Pictures/Group 2stats.svg'
import Paperclip_logo_svg from "../Pictures/image 1logo.svg"
import UsersButton from "../Pictures/VectorUsers.svg"
import ProjectsButton from "../Pictures/Group 1Projects.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons"
import Avatar from 'react-avatar'
import { NavLink } from "react-router-dom"

interface ISideBar {
  sidebarOpen : boolean
}

const SideBar = (props: ISideBar) => {
  return (
    <>
      <main className="sidebar-main">
        <div className="sidebar-icons-top">
          <img src={Paperclip_logo_svg} alt="logo" className="paperclip-logo" />
          {/* <p className="sidebar-text">PaPercliP</p> */}
          <div className="logo-underline" />

          <div className="sidebar-button-container">
            <NavLink to="/" className={({ isActive }) => isActive ? 'sidebar-button-active' : undefined}>
              <FontAwesomeIcon icon={faGaugeHigh} className="sidebar-button" />
              {/* <p className="sidebar-text">Dashboard</p> */}
            </ NavLink>
          </div>
          <div className="sidebar-button-container">
            <NavLink to="/users" className={({ isActive }) => isActive ? 'sidebar-button-active' : undefined}>
              <img src={UsersButton} alt="users" className="sidebar-button" />
              {/* <p className="sidebar-text">People</p> */}
            </ NavLink>
          </div>
          <div className="sidebar-button-container">
            < NavLink to="/projects" className={({ isActive }) => isActive ? 'sidebar-button-active' : undefined}>
              <img src={ProjectsButton} alt="projects" className="sidebar-button" />
              {/* <p className="sidebar-text">Projects</p> */}
            </ NavLink>
          </div>
          <div className="sidebar-button-container">
            <NavLink to="/stats" className={({ isActive }) => isActive ? 'sidebar-button-active' : undefined}>
              <img src={StatsButton} alt="stats" className="sidebar-button" />
              {/* <p className="sidebar-text">Stats</p> */}
            </ NavLink>
          </div>


        </div>
        <Avatar name="Inderjeet Ubha" color={'#03436e'} size="60" round={true} className="avatar-user-info" />
      </main>


    </>

  )


}


export default SideBar