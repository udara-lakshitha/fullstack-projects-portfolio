import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const usersRes = await api.get("/users");
      setUsers(usersRes.data);

      const loansRes = await api.get("/loans");
      setLoans(loansRes.data);
    }
    fetchData();
  }, []);

  const totalLoans = loans.length;
  const pendingLoans = loans.filter(l => l.status === "PENDING").length;
  const approvedLoans = loans.filter(l => l.status === "APPROVED").length;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>Total Users: {users.length}</div>
      <div>Total Loans: {totalLoans}</div>
      <div>Approved Loans: {approvedLoans}</div>
      <div>Pending Loans: {pendingLoans}</div>
    </div>
  );
}

export default Dashboard;