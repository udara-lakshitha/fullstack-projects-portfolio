import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import LoanList from "./components/LoanList";
import CreateLoan from "./components/CreateLoan";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <Router>
      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 h-screen bg-gray-800 text-white p-4 space-y-4">
          <h1 className="text-xl font-bold mb-4">Smart Loan App</h1>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">Dashboard</Link>
            </li>
            <li>
              <Link to="/users" className="hover:text-blue-400">Users</Link>
            </li>
            <li>
              <Link to="/create-user" className="hover:text-blue-400">Create User</Link>
            </li>
            <li>
              <Link to="/loans" className="hover:text-blue-400">Loans</Link>
            </li>
            <li>
              <Link to="/create-loan" className="hover:text-blue-400">Create Loan</Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/loans" element={<LoanList />} />
            <Route path="/create-loan" element={<CreateLoan />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
