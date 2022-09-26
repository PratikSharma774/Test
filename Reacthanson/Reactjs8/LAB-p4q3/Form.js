import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    
    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }
    
    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
                value={FormData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
                value={FormData.LastName}
            />
        </form>
    )
}
