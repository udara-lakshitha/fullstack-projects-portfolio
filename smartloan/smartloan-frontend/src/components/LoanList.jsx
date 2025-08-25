import { useEffect, useState } from "react";
import api from "../services/api";

function LoanList() {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        api.get("/loans")
        .then(res => setLoans(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Loans</h2>
            <ul>
                {loans.map(l => (
                    <li key = {l.id}>
                        {l.amount} - {l.status} (User ID: {l.user.id})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LoanList;