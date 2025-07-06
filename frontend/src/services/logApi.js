import axios from "axios";

const API_BASE = "http://localhost:4000/logs";

export const fetchLogs = async (filters) => {
  const params = {};
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params[key] = value;
  });
  const res = await axios.get(API_BASE, { params });
  return res.data;
};

export const clearLogs = async () => {
  const res = await fetch("http://localhost:4000/logs", { method: "DELETE" });
  return res.json();
};
