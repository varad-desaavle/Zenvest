const apiBaseUrl = process.env.REACT_APP_API_URL
    || (process.env.NODE_ENV === "development"
        ? "http://localhost:3002"
        : "https://zenvest-backend-sesu.onrender.com");
const loginUrl = process.env.REACT_APP_FRONTEND_URL
    ? `${process.env.REACT_APP_FRONTEND_URL.replace(/\/$/, "")}/login`
    : (process.env.NODE_ENV === "development" ? "http://localhost:3000/login" : "");

export { apiBaseUrl, loginUrl };
