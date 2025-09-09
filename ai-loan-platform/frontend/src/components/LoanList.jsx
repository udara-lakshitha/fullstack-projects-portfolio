export default function LoanList({ loans }) {
  if (!loans) return <p>Loading loans...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">Loan Applications</h2>
      {loans.length === 0 ? (
        <p className="text-gray-500">No loans submitted yet.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Industry</th>
              <th className="p-2 text-left">Approval %</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id} className="border-b">
                <td className="p-2">{loan.id}</td>
                <td className="p-2">${loan.amount}</td>
                <td className="p-2">{loan.industry}</td>
                <td className="p-2">{(loan.approvalProbability * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}