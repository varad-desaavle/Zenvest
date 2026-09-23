import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "../auth/authClient";
import { dashboardUrl } from "../config";
import "./AuthPages.css";

const Login = () => {
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { email, password } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const { data } = await signIn(inputValue);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                if (dashboardUrl) {
                    window.location.replace(dashboardUrl);
                } else {
                    handleError("Dashboard is not configured yet");
                }
            } else {
                handleError(message);
            }
        } catch (error) {
            handleError(error.response?.data?.message || "Unable to connect to server");
        } finally {
            setIsSubmitting(false);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
        });
    };

    return (
        <main className="auth-page">
            <section className="auth-intro" aria-label="Investa introduction">
                <p className="auth-kicker">Invest with intention</p>
                <h1>Build a future that feels <em>worth it.</em></h1>
                <p className="auth-intro-copy">
                    A calmer, clearer way to follow your portfolio and make every financial decision count.
                </p>
                <div className="auth-signals" aria-label="Platform highlights">
                    <div className="auth-signal"><strong>24/7</strong><span>Portfolio access</span></div>
                    <div className="auth-signal"><strong>1 view</strong><span>For your wealth</span></div>
                </div>
            </section>
            <section className="auth-card">
                <div className="auth-brand"><span className="auth-brand-mark">I</span>Investa</div>
                <h2>Welcome back</h2>
                <p className="auth-subtitle">Sign in to pick up where you left off.</p>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleOnChange}
                    />
                    </div>
                    <div className="auth-field">
                    <label htmlFor="password">Password</label>
                    <div className="auth-password">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={handleOnChange}
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    </div>
                <button className="auth-submit" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Signing in..." : "Submit"}
                </button>
                <p className="auth-switch">
                    Already have an account? <Link to={"/signup"}>Signup</Link>
                </p>
            </form>
            </section>
            <ToastContainer />
        </main>
    );
};

export default Login;