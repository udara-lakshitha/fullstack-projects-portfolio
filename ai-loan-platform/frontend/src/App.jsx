import { useEffect, useState } from 'react';
import './App.css'
import LoanForm from './components/LoanForm';
import LoanList from './components/LoanList';
import { getLoans } from './services/api';
import { Toaster } from "react-hot-toast";

function App() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLoans();
      setLoans(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex gap-8 p-8">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-1/3">
        <LoanForm setLoans={setLoans} />
      </div>
      <div className="w-2/3 overflow-y-auto max-h-[600px]">
        <LoanList loans={loans} />
      </div>
    </div>
  );
}

export default App
