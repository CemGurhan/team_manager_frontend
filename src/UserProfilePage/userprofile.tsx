import "./userprofile.css"
import Table from 'react-bootstrap/Table';

const UserProfilePage= () => {

    return (
        <>
            
                
               
                <div className="div3"> </div>
                
            <div className="parent">
            <div className="div1"> 
            <div className="user-title">
                <h1>Tony Stark</h1>

            </div>

            <div className="user-details">
                <div className="user-eachline">
                    <h2>First Name</h2>
                    <h3>Tony</h3>
                    
                </div>
                <hr></hr>

                <div className="user-eachline">
                    <h2>Last Name</h2>
                    <h3>Stark</h3>
                 
                </div>
                <hr></hr>
                <div className="user-eachline">
                    <h2>Prefer Name</h2>
                    <h3>Iron Man</h3>
    
                </div>
                <hr></hr>
                <div className="user-eachline">
                    <h2>Country</h2>
                    <h3>USA</h3>
                   
                </div>
                <hr></hr>
                <div className="user-eachline">
                    <h2>Contract Type</h2>
                    <h3>permanent</h3>
                    
                </div>
                <hr></hr>
                <div className="user-eachline">
                    <h2>Buddies</h2>
                    <h3>Captain America</h3>
                 
                </div>
                <hr></hr>
                <div className="user-eachline">
                    <h2>Source</h2>
                    <h3>superhero</h3>
                
                </div>
                <hr></hr>
                <div className="user-eachline">
                    <h2>DAS Id</h2>
                    <h3>111111</h3>
                </div>

            </div>
            </div>
       
            <div className="user-in-project div3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th colSpan={4}>Projects</th>
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
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            </div>

        </>
    )
}

export default UserProfilePage