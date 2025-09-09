import { useState } from "react";
import { submitLoan, getLoans } from "../services/api.js";
import { toast } from "react-hot-toast";

export default function LoanForm({ setLoans }) {
  const labels = {
    amount: "Loan Amount",
    revenueMonthly: "Monthly Revenue",
    expensesMonthly: "Monthly Expenses",
    industry: "Industry",
    yearsInBusiness: "Years in Business",
    creditScore: "Credit Score",
  };

  const initialFormState = {
    amount: "",
    revenueMonthly: "",
    expensesMonthly: "",
    industry: "",
    yearsInBusiness: "",
    creditScore: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await submitLoan(formData);
      toast.success("Loan submitted successfully!");

      // Clear the form
      setFormData(initialFormState);

      // Update loan list
      const updatedLoans = await getLoans();
      setLoans(updatedLoans);

      // Display prediction result
      setResult({
        approvalProbability: response.approvalProbability,
        recommendedProductId: response.recommendedProductId,
        mlModelVersion: response.mlModelVersion,
      });
    } catch (err) {
      console.error("Error submitting loan:", err);
      toast.error("Failed to submit loan!");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">Submit Loan Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(labels).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="font-medium mb-1">{labels[key]}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="border rounded-md p-2 focus:ring focus:ring-blue-300"
              required={key !== "creditScore"} // optional field
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Prediction Result:</h3>
          <p>
            <strong>Approval Probability:</strong> {result.approvalProbability}
          </p>
          <p>
            <strong>Recommended Product ID:</strong> {result.recommendedProductId}
          </p>
          <p>
            <strong>Model Version:</strong> {result.mlModelVersion}
          </p>
        </div>
      )}
    </div>
  );
}