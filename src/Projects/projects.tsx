import './projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'


const Projects = () => {

    const [showFilters, setShowFilters] = useState(false)
    const toggleShowFilters = () => {setShowFilters(!showFilters)}

    

    return(
        
        
            <body className="mainBody">
                

                <div className="filters-search">


                    <button className="filter-search-filter-button" onClick={toggleShowFilters}>Filter</button>

                    
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
                {showFilters? <div className='filters-box'>
                    
                    <div className='filter-label-and-input'>
                        <label htmlFor="project-status" className='filter-label'>Project Status:</label>
                        <select name="project-status" id="project-status">
                            <option value="any">Any</option>
                            <option value="ongoing">Ongoing</option>
                            <option value="completed">Completed</option>
                            <option value="Upcoming">Upcoming</option>
                        </select>
                    </div>

                    <div className='filter-label-and-input'>
                        <label htmlFor="people" className='filter-label'>Number of People:</label>
                        <input type="number" id="people" name='people' min='0' />
                    </div>

                    <div className='filter-label-and-input'>
                        <label htmlFor="deadline" className='filter-label'>Deadline:</label>
                        <input type="date" id='deadline' name='deadline' />
                    </div> 

                    <div className='filter-label-and-input'>
                        <label htmlFor="start-date" className='filter-label'>Start Date:</label>
                        <input type="date" id='start-date' name='start-date' />
                    </div> 
                    
                </div> : null}

                <div className="status-key-container">

                    {/* <div className="status-key-container-title-text-container">
                        
                        <p className="status-key-container-text-title">Project Status</p>

                    </div> */}
                    
                    <div className='status-key-container-seperator'></div>
                    <p className="status-key-container-text">On-going Project:</p>
                    <div className="status_key_container_status_running"></div>
                    <div className='status-key-container-seperator'></div>

                    <p className="status-key-container-text">Completed Project:</p>
                    <div className="status_key_container_status_complete"></div>
                    <div className='status-key-container-seperator'></div>
                
                    <p className="status-key-container-text">Upcoming Project:</p>
                     <div className="status_key_container_status_upcoming"></div>
                     <div className='status-key-container-seperator'></div>




                </div>

                <div className="projects-list">

                    
                    <div className="projects-list-project-card">

                       
                           
                            <div className="projects-list-project-card_status_running"></div>
                     


                        

                        

                        <p className="projects-list-project-card_project_name">Project Name: Skills Matrix</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: 5</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <button className="projects-list-learn-more-button">Learn More/Edit</button>

                        

                        

                    </div>

                    <div className="projects-list-project-card">

                    
                            
                            <div className="projects-list-project-card_status_complete"></div>
                    

                     

                        

                        <p className="projects-list-project-card_project_name">Project Name: Team Manager</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: 8</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <button className="projects-list-learn-more-button">Learn More/Edit</button>

                    </div>

                    <div className="projects-list-project-card">

                        
                
                            
                            <div className="projects-list-project-card_status_running"></div>
                       

                        

                        

                        <p className="projects-list-project-card_project_name">Project Name: ING</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: 10</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <button className="projects-list-learn-more-button">Learn More/Edit</button>

                    </div>

                     <div className="projects-list-project-card">

                        
                    
                            
                            <div className="projects-list-project-card_status_upcoming"></div>
                    

                        

                        

                        <p className="projects-list-project-card_project_name">Project Name: A New Very Cool Project</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: -10</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <button className="projects-list-learn-more-button">Learn More/Edit</button>

                    </div>

                     <div className="projects-list-project-card">

              
                            
                            <div className="projects-list-project-card_status_upcoming"></div>
                  

                     

                        

                        <p className="projects-list-project-card_project_name">Project Name: A New, even coooooler, project</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: 800</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <button className="projects-list-learn-more-button">Learn More/Edit</button>

                    </div>


                    <div className="projects-list-project-card">

              
                            
                            <div className="projects-list-project-card_status_upcoming"></div>
                  

                     

                        

                        <p className="projects-list-project-card_project_name">Project Name: A New, even coooooler, project</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: 800</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <button className="projects-list-learn-more-button">Learn More/Edit</button>

                    </div>

                   
                    

                    
                    

                    

                   


                </div>


            </body>
        
        
        
    )







}

export default Projects