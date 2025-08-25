import { useEffect, useState } from "react"
import api from "../services/api";

function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get("/users")
        .then(res => setUsers(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(u => (
                    <li key = {u.id}>{u.fullName} ({u.email})</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;