import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiBaseUrl, loginUrl } from "../config";

const AuthGuard = ({ children }) => {
    const [isChecking, setIsChecking] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        let isMounted = true;

        axios.get(`${apiBaseUrl}/api/auth/session`, { withCredentials: true })
            .then(() => {
                if (isMounted) {
                    setIsAuthenticated(true);
                }
            })
            .catch(() => {
                if (loginUrl) {
                    window.location.replace(loginUrl);
                }
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