import axios from "axios";
import { apiBaseUrl } from "../config";

const authClient = axios.create({
    baseURL: `${apiBaseUrl}/api/auth`,
    withCredentials: true,
});

export const signUp = (user) => authClient.post("/signup", user);
export const signIn = (credentials) => authClient.post("/signin", credentials);
export const getSession = () => authClient.get("/session");
export const signOut = () => authClient.post("/signout");

export default authClient;