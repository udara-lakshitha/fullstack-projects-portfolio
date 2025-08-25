import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import LoanList from "./components/LoanList";
import CreateLoan from "./components/CreateLoan";

function App() {

  return (
    <Router>
		<div>
			<h1>Smart Loan App</h1>
			<nav>
				<Link to="/users">Users</Link> |{" "}
				<Link to="/loans">Loans</Link> |{" "}
				<Link to="/create-user">Create User</Link> |{" "}
				<Link to="/create-loan">Create Loan</Link>
			</nav>
			<Routes>
				<Route path="/users" element={<UserList />} />
				<Route path="/loans" element={<LoanList />} />
				<Route path="/create-user" element={<CreateUser />} />
				<Route path="/create-loan" element={<CreateLoan />} />
			</Routes>
		</div>
    </Router>
  )
}

export default App
