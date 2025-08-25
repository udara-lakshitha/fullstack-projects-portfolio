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
        <div>
            <h2>Create Loan</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                type="number"
                placeholder="Term in Months"
                value={termInMonths}
                onChange={(e) => setTermInMonths(e.target.value)}
            />
            <input
                type="number"
                placeholder="Interest Rate (%)"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
            />
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="PENDING">Pending</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
            </select>
            <input
                type="number"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button type="submit">Create Loan</button>
            </form>
        </div>
    );

}

export default CreateLoan;