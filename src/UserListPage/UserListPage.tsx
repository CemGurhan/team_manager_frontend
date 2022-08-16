import "./UserListPage.css"

function UserList () {
    return (
        <>
            <h1>Personnel</h1>
            <section className="container">
                {/* <Filter /> */}
                <EntryContainer />
            </section>
        </>
    )

}

const Filter = () => {
    return (
        <section className="filtercontainer">
            <p>Start date </p>
            <p>On board? </p>
            <p>Contract type</p>
            <p>Exit date</p>
            <p>Country</p>
            <p>Grading</p>
            <p>Gender</p>
        </section>
    )
}

const EntryContainer = () => {

return (
    <>

    </>
)
}

const PersonnelEntry = () => {
    return (
        <section className="meishi">
            <p>Takahashi Sdfweg</p>
            <p>National Grid</p>
            <p>Permanent</p>
            <p></p>
            <button>See more</button>
        </section>
    )
}

export default UserList