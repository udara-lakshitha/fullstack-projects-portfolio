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
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">All Loans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loans.map(loan => (
                <div key={loan.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                    <p><strong>User ID:</strong> {loan.user?.id}</p>
                    <p><strong>Amount:</strong> ${loan.amount}</p>
                    <p><strong>Term:</strong> {loan.termInMonths} months</p>
                    <p><strong>Interest Rate:</strong> {loan.interestRate}%</p>
                    <p><strong>Status:</strong> {loan.status}</p>
                    <p><strong>Start Date:</strong> {loan.startDate}</p>
                    <p><strong>End Date:</strong> {loan.endDate}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default LoanList;