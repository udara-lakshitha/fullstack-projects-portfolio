import './App.css'
import LoanForm from './components/LoanForm';
import LoanList from './components/LoanList';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">AI Loan Platform</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Form */}
        <LoanForm />

        {/* Right: Loan list */}
        <LoanList />
      </div>

      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App
