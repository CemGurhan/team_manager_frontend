import "./projectprofile.css"

const ProjectProfilePage= () => {
    
    // bar chart
    var xValues = ["Contactor", "intern", "Permanent"];
    var yValues = [12, 3, 8];
    var barColors = [ "green","blue","orange"];

    new Chart("myChart", {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "World Wine Production 2018"
          }
        }
      });






    return(
        <>
            <div className="parent">
            <div className="div1">
            <div className="project-title">
                <h1>Cerebro</h1>

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
                <div className="project-eachline">
                    <h4>DAS Id</h4>
                    <p>111111</p>
                </div>

            </div>
            </div>
            <div className="div2" > 

            
            </div>
       
            <div className="div3">
                
            </div>
            </div>


        </>
    )
}

export default ProjectProfilePage