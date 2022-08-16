import './projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"


const Projects = () => {

    return(
        
        
            <body className="mainBody">
                

                <div className="filters-search">


                    <button className="filter-search-filter-button">Filter</button>

                    
                    <div className="filters-search-title-container">
                    <h1 className="filters-search-projects-header">All</h1>
                    <h1 className="filters-search-projects-header2">Projects</h1>

                    </div>
                    

                    

                    <form className="filters-search-searchbox">
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <input className="filters-search-searchbox-search" type="text"  placeholder='Search project by name'/>
                    </form>

                    

                </div>

                {/* <div className="seperator-line"></div> */}

                <div className="projects-list">

                    
                    <div className="projects-list-project-card">

                        <div className="status_container">
                           
                            <div className="projects-list-project-card_status_running"></div>
                        </div>


                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_name">Skills Matrix</p>
                        

                        

                    </div>

                    <div className="projects-list-project-card">

                    <div className="status_container">
                            
                            <div className="projects-list-project-card_status_complete"></div>
                        </div>

                    <p className="projects-list-project-card_project_name">Skills Matrix</p>

                    </div>

                    <div className="projects-list-project-card">

                        
                    <div className="status_container">
                            
                            <div className="projects-list-project-card_status_running"></div>
                        </div>

                        <p className="projects-list-project-card_project_name">Skills Matrix</p>

                    </div>

                     <div className="projects-list-project-card">

                        
                     <div className="status_container">
                            
                            <div className="projects-list-project-card_status_upcoming"></div>
                        </div>

                        <p className="projects-list-project-card_project_name">Skills Matrix</p>

                    </div>

                     <div className="projects-list-project-card">

                        
                     <div className="status_container">
                            
                            <div className="projects-list-project-card_status_upcoming"></div>
                        </div>

                        <p className="projects-list-project-card_project_name">Skills Matrix</p>

                    </div>

                   
                    

                    
                    

                    

                   


                </div>


            </body>
        
        
        
    )







}

export default Projects