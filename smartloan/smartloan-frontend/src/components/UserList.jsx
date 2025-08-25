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
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">All Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                <div key={user.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold">{user.fullName}</h3>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-500 text-sm">ID: {user.id}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;