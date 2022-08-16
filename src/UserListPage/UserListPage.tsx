import axios from "axios"
import { useEffect, useState } from "react"
import "./UserListPage.css"
import Records from "./Records"
import Pagination from "./Pagniation"

function UserList () {

    // reference: https://www.codesmartly.codes/mock-api-in-react/json-server/how-to-create-a-mock-api-in-react/
    useEffect( () => {
        axios.get(`http://localhost:3000/personnels`)
                .then(res => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch((err: any) => {
                    console.log(err);
                });
        }, []
    )

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    // User is currently on this page
    const [currentPage, setCurrentPage] = useState(1);
    // No of Records to be displayed on each page   
    const [recordsPerPage] = useState(10);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    // Records to be displayed on the current page
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    // number of pages
    const nPages = Math.ceil(data.length / recordsPerPage)

    return (
        <>
            <h1>Personnel</h1>
            <section className="container">
                <Records data={currentRecords}/>
            </section>
            <Pagination 
                nPages = { nPages } 
                currentPage = { currentPage } 
                setCurrentPage = { setCurrentPage }
            />
        </>
    )

}




export default UserList