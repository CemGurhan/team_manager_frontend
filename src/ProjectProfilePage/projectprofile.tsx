import "./projectprofile.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { NavLink } from "react-router-dom"


const ProjectProfilePage= () => {

    var setting_image_address = ""

    return(
        <>
            <div className="parent">
            <div className="div1">
            <div className="project-title">
                <h1>Cerebro 
                <NavLink to="/projectupdate" >
                    <img src="https://cdn-icons-png.flaticon.com/512/3039/3039498.png" alt="setting" className="setting-button" />
                </ NavLink>
                </h1>
                
            
            </div>
            <div className="project-details">
                <div className="project-eachline">
                    <h4>Name</h4>
                    <p>Cerebro</p>
                    
                </div>
                <hr></hr>

                <div className="project-eachline">
                    <h4>Start date</h4>
                    <p>02/22/2022</p>
                 
                </div>
                <hr></hr>
                <div className="project-eachline">
                    <h4>Deadline</h4>
                    <p>12/2022</p>
                 </div>
                <hr></hr>

                <div className="project-eachline">
                    <h4>Number of People</h4>
                    <p>23</p>
                    
                    
                    
                </div>
                
                <hr></hr>
                <div className="project-eachline">
                    <h4>Status</h4>
                    <p>In progress</p>
                    
                 
                </div>
                <hr></hr>
                <div className="project-eachline">
                    <h4>Client</h4>
                    <p>Google</p>
                    
                
                </div>
                <hr></hr>
                <div>
                <div>
                    <ProgressBar variant="success" now={40} label = {"contractor"} />
                    <ProgressBar variant="info" now={20} label = {"intern"} />
                    <ProgressBar variant="warning" now={60} label = {"permanent"}/>
                </div>
                </div>

            </div>
            </div>
            <div className="div2 project-assign" > 

            <table>
                <thead>
                    <tr className="red">
                    <th>People Assigned</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Katya</td>
                    </tr>
                    <tr>
                        <td>Tom</td>
                    </tr>
                    <tr>
                        <td>Jenna</td>
                    </tr>
                    <tr>
                        <td>Harry</td>
                    </tr>
                    <tr>
                        <td>Carol</td>
                    </tr>
                    <tr>
                        <td>Cem</td>
                    </tr>
                    <tr>
                        <td>Fengyi</td>
                    </tr>
                    <tr>
                        <td>Ed</td>
                    </tr>
                    <tr>
                    <td>Joseph</td>
                    </tr>
                    
                </tbody>
                </table>
            
            </div>
       
            <div className="div3 tech-stack">
            <table>
                <thead>
                    <tr className="red">
                    <th>Tech Stack</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Golang</td>
                    </tr>
                    <tr>
                        <td>K8s</td>
                    </tr>
                    <tr>
                        <td>gRPC</td>
                    </tr>
                    <tr>
                        <td>Docker</td>
                    </tr>
                    
                </tbody>
                </table>


                
            </div>
            </div>


        </>
    )
}

export default ProjectProfilePage