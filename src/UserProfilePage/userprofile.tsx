import "./userprofile.css"
import Table from 'react-bootstrap/Table';


const UserProfilePage= () => {

    return (
        <>
            
                
                
            <div className="parent">
            <div className="div1">
            <div className="user-title">
                <h1>Tony Stark</h1>

            </div>
            <div className="user-details">
                <div className="user-eachline">
                    <h4>First Name</h4>
                    <p>Tony</p>
                    
                </div>
                <hr></hr>

                <div className="user-eachline">
                    <h4>Last Name</h4>
                    <p>Stark</p>
                 
                </div>
                <hr></hr>
                <div className="user-eachline">
                    <h4>Prefer Name</h4>
                    <p>Iron Man</p>
                 </div>
                <hr></hr>
                <div className="user-eachline">
                    <h4>Country</h4>
                    <p>USA</p>
                   
                </div>
                
                <hr></hr>
                <div className="user-eachline">
                    <h4>Contract Type</h4>
                    <p>permanent</p>
                    <div className="dropdown" style={{float:"right"}}>
                        <button className="dropbtn">🔽</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    
                    
                </div>
                
                <hr></hr>
                <div className="user-eachline">
                    <h4>Buddies</h4>
                    <p>Captain America</p>
                    <div className="dropdown" style={{float:"right"}}>
                        <button className="dropbtn">🔽</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                 
                </div>
                <hr></hr>
                <div className="user-eachline">
                    <h4>Source</h4>
                    <p>superhero</p>
                    <div className="dropdown" style={{float:"right"}}>
                        <button className="dropbtn">🔽</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                
                </div>
                <hr></hr>
                <div className="user-eachline">
                    <h4>DAS Id</h4>
                    <p>111111</p>
                </div>

            </div>
            </div>
            <div className="div2"> 
            <img className = "user-profile-img" src="https://media1.popsugar-assets.com/files/thumbor/_Rrjw5u5qeqlO8Zznc0TskZB_8k/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/04/30/868/n/1922283/1f2e59ed5ae773b06f2879.82877284_/i/Does-Iron-Man-Die-Avengers-Infinity-War.jpg" />
            </div>
       
            <div className="user-in-project div3">
                <Table  bordered hover>
                    <thead>
                        <tr>
                        <th colSpan={4} >Projects</th>
                        {/* <th>First Name</th> */}
                        </tr>
                    </thead>
                    <tbody className="user-in-project-content">
                        <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>internal</td>
                        <td>upcoming</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>external</td>
                        <td>upcoming</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td >Larry the Bird</td>
                        <td>internal</td>
                        <td>upcoming</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td >Larry the Bird</td>
                        <td>external</td>
                        <td>in progress</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td >Larry the Bird</td>
                        <td>external</td>
                        <td>completed</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td >Larry the Bird</td>
                        <td>external</td>
                        <td>completed</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            </div>

        </>
    )
}

export default UserProfilePage