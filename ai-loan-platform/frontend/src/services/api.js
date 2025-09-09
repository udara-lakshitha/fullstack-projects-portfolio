const API_URL = import.meta.env.VITE_API_URL;
const ML_SERVICE_URL = import.meta.env.VITE_ML_SERVICE_URL;

export const getLoans = async () => {
  const res = await fetch(`${API_URL}/loans`);
  return res.json();
};

export const submitLoan = async (loanData) => {
  const res = await fetch(`${API_URL}/loans/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loanData),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
};