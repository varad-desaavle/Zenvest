import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg border-bottom"
            style={{ backgroundColor: "#FFF" }}
        >
            <div className="container p-2">

                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="media/images/logo.svg"
                        style={{ width: "25%" }}
                        alt="Logo"
                    />
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-lg-0">

                            {/* Signup */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="/signup"
                                >
                                    Signup
                                </Link>
                            </li>

                            {/* About */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="/about"
                                >
                                    About
                                </Link>
                            </li>

                            {/* Product */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="/product"
                                >
                                    Product
                                </Link>
                            </li>

                            {/* Pricing */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="/pricing"
                                >
                                    Pricing
                                </Link>
                            </li>

                            {/* Support */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="/support"
                                >
                                    Support
                                </Link>
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;