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
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Create User</button>
            </form>
        </div>
    );
}

export default CreateUser;