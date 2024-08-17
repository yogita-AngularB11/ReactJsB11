import React, { useContext } from "react";
import userContext from "./UserContext";


const UsersList = () => {
    const { user } = useContext(userContext)
    if (!user.length)
        return (
            <div>
                Enter Users
            </div>
        );
        
    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((element, index) => (
                        <tr key={index}>
                            <td>{element.email}</td>
                            <td>{element.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList;
