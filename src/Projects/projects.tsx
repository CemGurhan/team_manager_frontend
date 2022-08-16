import Select from 'react-select'
import './projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Projects = () => {

    const [showFilters, setShowFilters] = useState(false)
    const toggleShowFilters = () => {setShowFilters(!showFilters)}
    const [loadingBar, setLoadingBar] = useState('0px')

    const techStackList = [
        {value: "go", label: "Go"},
        {value: "typescript", label: "Typescript"},
        {value: "react", label: "React"},
        {value: "docker", label: "Docker"},
        {value: "kubenetes", label: "Kubenetes"},
        {value: "java", label: "Java"}
    ];
    const [selectedTechStack, setSelectedTechStack] = useState();

    interface months_days_interface {

        data : Record<number, number>;

    }

    const months_days : months_days_interface = {
        data: {
            1 : 31,
        2 : 28,
        3 : 31,
        4 :30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 :31,
        9 : 30,
        10 : 31,
        11 : 30,
        12 : 31
        }
    }

    // LEAP YEARS!!!!
    function daysCalculator_betweenDates(projectStartDate: string, projectEndDate: string )  {

        const current = new Date()

        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

        const projectStartDate_Array = projectStartDate.split("/")        

        const projectEndDate_Array = projectEndDate.split("/")

        // let days_left = months_days.data[current.getMonth()+1] - current.getDate();

        // let current_day = current.getDate();
        // let current_month = current.getMonth() + 1;
        // let current_year = current.getFullYear();

        let days_left = months_days.data[parseInt(projectStartDate_Array[1],10)] - parseInt(projectStartDate_Array[0],10)

        let current_day = parseInt(projectStartDate_Array[0],10);
        let current_month = parseInt(projectStartDate_Array[1],10);
        let current_year = parseInt(projectStartDate_Array[2],10)

        

        while (current_month != parseInt(projectEndDate_Array[1],10)
               && current_year != parseInt(projectEndDate_Array[2],10)
               || current_month == parseInt(projectEndDate_Array[1],10) 
                && current_year != parseInt(projectEndDate_Array[2],10)) {

                current_month++

                if(current_month>12){
                    current_month = 0
                    current_year++
                    continue;
                }

                days_left += months_days.data[current_month]

        }

        if (current_year == parseInt(projectEndDate_Array[2],10)){
            
            while (true) {

                current_month++

                if(current_month == parseInt(projectEndDate_Array[1],10)){
                    break;
                }

                days_left += months_days.data[current_month]

            }

        }

        days_left += parseInt(projectEndDate_Array[0],10)

        return days_left;

    }


    const runningProject_loadingBar = () => {

        const current = new Date()

        const start_date = "11/03/2022"
        const end_date = "06/06/2023"

        let current_date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

        let percentage = (daysCalculator_betweenDates(start_date,current_date)/daysCalculator_betweenDates(start_date,end_date))

        let loadingBar_Level = percentage * 100

        setLoadingBar(`${loadingBar_Level}`)




    }
    


    
    

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

                
                {/* PUT IN DATES */}
              
               

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

                    <div className='filter-label-and-input'>
                        <label htmlFor="tech-stack" className='filter-label'>Tech stack:</label> 
                        <Select options={techStackList} placeholder="Select items" 
                                value={selectedTechStack} isSearchable={true} isMulti 
                                className='multi-dropdown-container' classNamePrefix="multi-dropdown" />
                    </div>

                    <div className='filter-label-and-input'>
                        <label htmlFor="team-member" className='filter-label'>Team Member:</label>
                        <input type="text" id='team-member' name='team-member'/>
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

                       
                           
                            <div className="projects-list-project-card_status_running" style={{borderBottom : `rgb(13, 147, 13) ${loadingBar} solid` }}></div>
                     


                        

                        

                        <p className="projects-list-project-card_project_name">Project Name: Skills Matrix</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: 5</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <Link to="/projectprofile">
                            <button className="projects-list-learn-more-button">Learn More/Edit</button>
                        </Link>
                        

                        

                    </div>

                    <div className="projects-list-project-card">

                    
                            
                            <div className="projects-list-project-card_status_complete"></div>
                    

                     

                        

                        <p className="projects-list-project-card_project_name">Project Name: Team Manager</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: 8</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <Link to="/projectprofile">
                            <button className="projects-list-learn-more-button">Learn More/Edit</button>
                        </Link>

                    </div>

                    <div className="projects-list-project-card">

                        
                
                            
                            <div className="projects-list-project-card_status_running" style={{borderBottom : `rgb(13, 147, 13) 80px solid` }}></div>
                       

                        

                        

                        <p className="projects-list-project-card_project_name">Project Name: ING</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: 10</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <Link to="/projectprofile">
                            <button className="projects-list-learn-more-button">Learn More/Edit</button>
                        </Link>

                    </div>

                     <div className="projects-list-project-card">

                        
                    
                            
                            <div className="projects-list-project-card_status_upcoming"></div>
                    

                        

                        

                        <p className="projects-list-project-card_project_name">Project Name: A New Very Cool Project</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: -10</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <Link to="/projectprofile">
                            <button className="projects-list-learn-more-button">Learn More/Edit</button>
                        </Link>

                    </div>

                     <div className="projects-list-project-card">

              
                            
                            <div className="projects-list-project-card_status_upcoming"></div>
                  

                     

                        

                        <p className="projects-list-project-card_project_name">Project Name: A New, even coooooler, project</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: 800</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <Link to="/projectprofile">
                            <button className="projects-list-learn-more-button">Learn More/Edit</button>
                        </Link>

                    </div>


                    <div className="projects-list-project-card">

              
                            
                            <div className="projects-list-project-card_status_upcoming"></div>
                  

                     

                        

                        <p className="projects-list-project-card_project_name">Project Name: A New, even coooooler, project</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <p className="projects-list-project-card_project_people">Number of People: 800</p>

                        <div className='projects-list-vertical-seperator'></div>

                        <Link to="/projectprofile">
                            <button className="projects-list-learn-more-button">Learn More/Edit</button>
                        </Link>

                    </div>

                   
                    

                    
                    

                    

                   


                </div>


            </body>
        
        
        
    )







}

export default Projects