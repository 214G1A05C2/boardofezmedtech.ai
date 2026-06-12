import axios from "axios";

const configuredBaseURL =
  process.env.REACT_APP_API_URL ||
  "https://clinicmetrics-backend.onrender.com";

const baseURL = configuredBaseURL
  .replace(/\/api\/call-metrics\/?$/, "")
  .replace(/\/api\/?$/, "")
  .replace(/\/+$/, "");

if (!baseURL) {
  console.error("Missing REACT_APP_API_URL. Add it to .env and restart the dev server.");
}

const API = axios.create({
  baseURL,
});

export default API;
