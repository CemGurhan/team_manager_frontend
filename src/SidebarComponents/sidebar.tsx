import "./sidebar.css"
import StatsButton from '../Pictures/Group 2stats.svg'
import Paperclip_logo_svg from "../Pictures/image 1logo.svg"
import UsersButton from "../Pictures/VectorUsers.svg"
import ProjectsButton from "../Pictures/Group 1Projects.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons"
import Avatar from 'react-avatar'
import { Link, NavLink } from "react-router-dom"

const sideBar = () => {

  return (
    <>



      <main className="sidebar-main">
        <div className="sidebar-icons-top">
          <img src={Paperclip_logo_svg} alt="logo" className="paperclip-logo" />
          <div className="logo-underline" />

          <Link to="/">
            <FontAwesomeIcon icon={faGaugeHigh} className="sidebar-button"/>
          </Link>
          <Link to="/users">
            <img src={UsersButton} alt="users" className="sidebar-button"/>
          </Link>
          <Link to="/projects">
            <img src={ProjectsButton} alt="projects" className="sidebar-button" />
          </Link>
          <Link to="/stats">
            <img src={StatsButton} alt="stats" className="sidebar-button" />
          </Link>


        </div>
        <Avatar name="Inderjeet Ubha" size="60" round={true} className="avatar-user-info" />
      </main>


    </>

  )


}


export default sideBar