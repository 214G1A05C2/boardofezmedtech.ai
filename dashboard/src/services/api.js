import axios from "axios";

const defaultBaseURL = "https://clinicmetrics-backend.onrender.com";

const configuredBaseURL = process.env.REACT_APP_API_URL?.trim();

const isLocalDevUrl = (value) =>
  /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?/i.test(
    value || ""
  );

const baseURL = (configuredBaseURL && !isLocalDevUrl(configuredBaseURL)
  ? configuredBaseURL
  : defaultBaseURL)
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
