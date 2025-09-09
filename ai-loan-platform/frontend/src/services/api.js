import axios from "axios";

const API_URL = "http://localhost:8080";

export const submitLoan = (loanData) => {
  return axios.post(`${API_URL}/loans/submit`, loanData);
};

export const getLoans = () => {
  return axios.get(`${API_URL}/loans`);
};