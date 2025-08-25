import { useState } from "react";
import api from "../services/api";

function CreateLoan() {

    const [amount, setAmount] = useState("");
    const [termInMonths, setTermInMonths] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("PENDING");
    const [userId, setUserId] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
        const response = await api.post(`/loans/user/${userId}`, {
            amount,
            termInMonths,
            interestRate,
            startDate,
            endDate,
            status,
        });
        console.log("Loan created:", response.data);
        } catch (error) {
        console.error("Error creating loan:", error);
        }
    }

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create Loan</h2>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
                <input className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500" type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                <input className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500" type="number" placeholder="Term in Months" value={termInMonths} onChange={e => setTermInMonths(e.target.value)} />
                <input className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500" type="number" placeholder="Interest Rate (%)" value={interestRate} onChange={e => setInterestRate(e.target.value)} />
                <input className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                <input className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                <select className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500" value={status} onChange={e => setStatus(e.target.value)}>
                <option value="PENDING">Pending</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
                </select>
                <input className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500" type="number" placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition" type="submit">Create Loan</button>
            </form>
        </div>
    );

}

export default CreateLoan;