import { Link } from "react-router-dom"
import "./dashboard.css"

function DashBoardModule () {
  return (
    <section className="dashboard">
      <section className="modules">
        <DashboardModuleContract />
        <DashboardModuleOngoingProject />
        <DashboardModuleUpcomingProject />
        <DashboardModuleBench />
        <DashboardModuleOtherStuff />        
        <DashboardModuleOtherStuff />
      </section>
        <Graph />
    </section>
  )
}


const DashboardModuleContract = () => {

  return (
    <section className="block">
        <div className="title">Contract</div>
        <div className="subtitle">15 people's contract due for renewal in 6 months</div> 
        <section className="entryblock">
          <div className="list">
            <div>Fengyi Hu</div>
            <div>Cem </div>
            <div>Ed </div>
          </div>
          <div className="list">
            <div>Expires in 5 months</div>
            <div>Expires in 5 months</div>
            <div>Expires in 5 months</div>
          </div>
          <div className="list">
          </div>
        </section>
        <Link to={"/users"}>View More</Link>
    </section>
  )
}

const DashboardModuleOngoingProject = () => {

  return (
    <section className="block">
        <div className="title">Ongoing Project</div>
        <div className="subtitle">There are 8 projects going on</div> 
        <section className="entryblock">
          <div className="list">
            <div>Team manager</div>
            <div>Met Police</div>
            <div>Skill matrix </div>
          </div>
          <div className="list">
          <div>Internal</div>
            <div>External</div>
            <div>Internal</div>
          </div>
          <div className="list">
          <div>8 people</div>
          <div>5 people</div>
            <div>6 people</div>
          </div>
        </section>
        <Link to={"/projects"}>View More</Link>
    </section>
  )
}

const DashboardModuleUpcomingProject = () => {

  return (
    <section className="block">
        <div className="title">Upcoming Project</div>
        <div className="subtitle">There are 3 upcoming projects</div> 
        <section className="entryblock">
          <div className="list">
            <div>Team manager</div>
            <div>ING</div>
            <div>Skill matrix </div>
          </div>
          <div className="list">            
          <div>Internal</div>
            <div>External</div>
            <div>Internal</div>
          </div>
          <div className="list">
          <div>8 people</div>
          <div>5 people</div>
            <div>6 people</div>
          </div>
        </section>
        <Link to={"/projects"}>View More</Link>
    </section>
  )
}

const DashboardModuleBench = () => {

  return (
    <section className="block">
        <div className="title">Bench</div>
        <div className="subtitle">There are 5 people on the bench</div> 
        <section className="entryblock">
          <div className="list">
            <div>Fengyi </div>
            <div>Cem</div>            
            <div>Ed</div>
          </div>
          <div className="list">
          <div>2 weeks</div>
            <div>1 week</div>
            <div>1 week</div>
          </div>
        </section>
        <Link to={"/users"}>View More</Link>
    </section>
  )
}

const DashboardModuleOtherStuff = () => {

  return (
    <section className="block">
        <div className="title">Other stuff</div>
        <div className="subtitle">summary of other stuff</div> 
        <section className="entryblock">
          <div className="list">
            <div>Fengyi </div>
            <div>Cem</div>
            <div>Ed</div>
          </div>
          <div className="list">
          <div>sdfeibcs</div>
            <div>vdfdgerf</div>
            <div>fhjrth</div>
          </div>
        </section>
        <button className="button">View More</button>
    </section>
  )
}

const Graph = () => {
  return (
    <section className="ratioblock">
      <section>
        <div className="pie"></div>
        <h5 className="ratiotitle">Male/Female ratio: 60%</h5>
      </section>

      <section>
        <div className="pie"></div>
        <h5 className="ratiotitle">Utilisation ratio: 80%</h5>
      </section>

      <section>
        <section className="barchart">
        <p>HTML</p>
          <div className="chartcontainer">
            <div className="skills html">90%</div>
          </div>

          <p>CSS</p>
          <div className="chartcontainer">
            <div className="skills css">80%</div>
          </div>

          <p>JavaScript</p>
          <div className="chartcontainer">
            <div className="skills js">65%</div>
          </div>

          <p>PHP</p>
          <div className="chartcontainer">
            <div className="skills php">60%</div>
          </div>
        </section>
        <h5 className="ratiotitle">Skills Bar chart</h5>
      </section>

      
      <button className="button">View More</button>
      </section>
  )
}





export default DashBoardModule;


