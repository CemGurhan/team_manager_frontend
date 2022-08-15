import { useEffect } from "react"
import DashboardModule from "../DashBoardModule/dashboard";
import "./landingPage.css"

function LandingPage() {

    const createProject = () => {
        fetch('https://34.88.222.80:443/api/v1/project/create', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
            },
            body: JSON.stringify({
              id: '3',
              name: 'hello from Vite!'
            })
          });
    }
       


    return (
         <body>
          <h1>Dashboard</h1>
          <DashboardModule />

         </body>
    )
   
}



export default LandingPage