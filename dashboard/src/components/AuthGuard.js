import React, { useEffect, useState } from "react";
import axios from "axios";

const LOGIN_URL = "http://localhost:3000/login";

const AuthGuard = ({ children }) => {
    const [isChecking, setIsChecking] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        let isMounted = true;

        axios.get("http://localhost:3002/api/auth/session", { withCredentials: true })
            .then(() => {
                if (isMounted) {
                    setIsAuthenticated(true);
                }
            })
            .catch(() => {
                window.location.replace(LOGIN_URL);
            })
            .finally(() => {
                if (isMounted) {
                    setIsChecking(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    if (isChecking) {
        return <div>Checking authentication...</div>;
    }

    return isAuthenticated ? children : null;
};

export default AuthGuard;