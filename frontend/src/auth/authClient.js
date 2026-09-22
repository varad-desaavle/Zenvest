import axios from "axios";

const authClient = axios.create({
    baseURL: "https://zenvest-backend-sesu.onrender.com/api/auth",
    withCredentials: true,
});

export const signUp = (user) => authClient.post("/signup", user);
export const signIn = (credentials) => authClient.post("/signin", credentials);
export const getSession = () => authClient.get("/session");
export const signOut = () => authClient.post("/signout");

export default authClient;