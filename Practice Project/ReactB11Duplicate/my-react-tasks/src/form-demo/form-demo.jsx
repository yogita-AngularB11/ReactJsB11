import { useState } from "react"

export default function FormDemo() {

    const [user, setUser] = useState({ UserName: '', Age: 0, City: ''})

    function handleNameChange(e) {
        setUser({
            UserName: e.target.value,
            Age: user.Age,
            City: user.City
        })
    }

    function handleAgeChange(e) {
        setUser({
            UserName: user.UserName,
            Age: e.target.value,
            City: user.City
        })
    }
    function handleCityChange(e) {
        setUser({
            UserName: user.UserName,
            Age: user.Age,
            City: e.target.value,
        })
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" onChange={handleNameChange} /></dd>

                    <dt>Age</dt>
                    <dd><input type="number" onChange={handleAgeChange} /></dd>

                    <dt>City</dt>
                    <dd>
                        <select onChange={handleCityChange}>
                            <option>Select City</option>
                            <option>Pandharpur</option>
                            <option>Pune</option>
                            <option>Hyderabad</option>
                        </select>
                    </dd>
                </dl>
                <button >Submit</button>
            </form>

        </div>
    )
}