import "./dashboard.css"


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
        <button className="button">View More</button>
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
        <button className="button">View More</button>
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
        <button className="button">View More</button>
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
        <button className="button">View More</button>
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
        <p className="ratiopadding">Male/Female ratio: 60%</p>
      </section>

      <section>
        <div className="pie"></div>
        <p className="ratiopadding">Utilisation ratio: 80%</p>
      </section>


      <section className="barchart">
        <div className="bar">
      <div>HTML</div>
      <div className="container">
        <div className="skills html">90%</div>
      </div>
      </div>

      <div className="bar">
      <div>CSS</div>
      <div className="container">
        <div className="skills css">80%</div>
      </div>  
      </div>

      <div className="bar">
      <div>JavaScript</div>
      <div className="container">
        <div className="skills js">65%</div>
      </div>
      </div>

      <div className="bar">
      <div>PHP</div>
      <div className="container">
        <div className="skills php">60%</div>
      </div>
      </div>
      <p className="ratiopadding">Bar chart</p>

      </section>
      
      <button className="button">View More</button>
      </section>
  )
}

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



export default DashBoardModule;


