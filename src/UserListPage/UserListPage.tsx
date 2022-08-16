import axios, { Axios } from "axios"
import { useEffect, useState } from "react"
import "./UserListPage.css"


function UserList () {

    

    return (
        <>
            <h1>Personnel</h1>
            <section className="container">
                <EntryContainer />
            </section>
        </>
    )

}

const EntryContainer = () => {

    let personnels = [
        {
            "id": 1,
            "firstName": "Fengyi",
            "lastName": "Hu",
            "currentProject": "team manager",
            "currentProjectType": "Internal",
            "contractType": "contract",
            "source": "bnta c5"
        },
        {
            "id": 2,
            "firstName": "Cem",
            "lastName": "Gurhan",
            "currentProject": "team manager",
            "currentProjectType": "Internal",
            "contractType": "contract",
            "source": "bnta c5"
        },
        {
            "id": 3,
            "firstName": "Joseph",
            "lastName": "Sutherland",
            "currentProject": "HMRC",
            "currentProjectType": "External",
            "contractType": "permanant",
            "source": "Atos Advert", 
            "grading": "c"
        },
        {
            "id": 4,
            "firstName": "Carol",
            "lastName": "Li",
            "currentProject": "ARMS",
            "currentProjectType": "External",
            "contractType": "permanant",
            "source": "Atos Advert",
            "grading": "a"
        },
        {
            "id": 5,
            "firstName": "Ed",
            "lastName": "Hulbert",
            "currentProject": "Permier League",
            "currentProjectType": "External",
            "contractType": "Intern",
            "source": "Digital Futures"
        },
        {
            "id": 6,
            "firstName": "Katya",
            "lastName": "Grenier",
            "currentProject": "National Grid",
            "currentProjectType": "External",
            "contractType": "contract",
            "source": "Experis",
            "grading": "b"
        }
    ]

    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Current Project</th>
                    <th>Current Project Type</th>
                    <th>Contract Type</th>
                    <th>Source</th>
                    <th>Grading</th>
                </tr>
            </thead>
            <tbody>
                {
                    personnels.map(
                        (person, index) => {
                            return (
                                <tr key={index}>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>{person.currentProject}</td>
                                    <td>{person.currentProjectType}</td>
                                    <td>{person.contractType}</td>
                                    <td>{person.source}</td>
                                    <td>{person.grading}</td>
                                </tr>
                            )
                        })}
            </tbody>
        </table>

    </div>
    )
}


export default UserList