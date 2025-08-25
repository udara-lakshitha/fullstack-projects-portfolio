import { useState } from "react";
import api from "../services/api";

function CreateUser() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await api.post("/users", {
                fullName,
                email,
                password,
        });
        console.log("User created:", response.data);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create User</h2>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
                <input
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)}
                />
                <input
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                />
                <input
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
                />
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition" type="submit">Create User</button>
            </form>
        </div>
    );
}

export default CreateUser;