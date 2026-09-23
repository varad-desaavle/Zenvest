const apiBaseUrl = process.env.REACT_APP_API_URL
    || (process.env.NODE_ENV === "development"
        ? "http://localhost:3002"
        : "https://zenvest-backend-sesu.onrender.com");
const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL
    || (process.env.NODE_ENV === "development" ? "http://localhost:3001/" : "");

export { apiBaseUrl, dashboardUrl };
