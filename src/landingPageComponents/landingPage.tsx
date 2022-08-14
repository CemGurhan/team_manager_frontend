import { useEffect } from "react"

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
        
        <>
         <p>hewlow</p> 

         <button onClick={createProject}>Click to create</button>
        
        </>
        
        
    )
   
}

export default LandingPage