import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signUp } from "../auth/authClient";
import "./AuthPages.css";

const Signup = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });

    const { email, password, username } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) => {
        toast.error(err, {
            position: "bottom-left",
        });
    };

    const handleSuccess = (msg) => {
        toast.success(msg, {
            position: "bottom-right",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { data } = await signUp({ email, password, username });

            const { success, message } = data;

            if (success) {
                handleSuccess(message);

                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);

            if (error.response) {
                handleError(error.response.data.message);
            } else {
                handleError("Unable to connect to server");
            }
        } finally {
            setIsSubmitting(false);
        }

        setInputValue({
            email: "",
            password: "",
            username: "",
        });
    };

    return (
        <main className="auth-page">
            <section className="auth-intro" aria-label="Investa introduction">
                <p className="auth-kicker">Your money, in motion</p>
                <h1>Start investing with a little more <em>clarity.</em></h1>
                <p className="auth-intro-copy">
                    Create your Investa account and bring your goals, holdings, and next move into focus.
                </p>
                <div className="auth-signals" aria-label="Platform highlights">
                    <div className="auth-signal"><strong>Simple</strong><span>Built for confidence</span></div>
                    <div className="auth-signal"><strong>Secure</strong><span>From day one</span></div>
                </div>
            </section>
            <section className="auth-card">
                <div className="auth-brand"><span className="auth-brand-mark">I</span>Investa</div>
                <h2>Create your account</h2>
                <p className="auth-subtitle">A smarter starting point for your investing journey.</p>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-field">
                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className="auth-field">
                    <label htmlFor="username">Username</label>

                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter your username"
                        onChange={handleOnChange}
                        required
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
                            required
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <button className="auth-submit" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating account..." : "Submit"}
                </button>

                <p className="auth-switch">
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </p>
            </form>
            </section>
        </main>
    );
};

export default Signup;