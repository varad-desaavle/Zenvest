import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../landing_page/Navbar";

jest.mock("react-router-dom", () => ({
    Link: ({ to, children, ...props }) => (
        <a href={to} {...props}>
            {children}
        </a>
    ),
}));

describe("Navbar Component", () => {
    test("renders the logo and navigation links", () => {
        render(<Navbar />);

        expect(screen.getByAltText("Logo")).toHaveAttribute(
            "src",
            "media/images/logo.svg"
        );
        expect(screen.getByRole("link", { name: "Signup" })).toHaveAttribute(
            "href",
            "/signup"
        );
        expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
            "href",
            "/about"
        );
        expect(screen.getByRole("link", { name: "Product" })).toHaveAttribute(
            "href",
            "/product"
        );
        expect(screen.getByRole("link", { name: "Pricing" })).toHaveAttribute(
            "href",
            "/pricing"
        );
        expect(screen.getByRole("link", { name: "Support" })).toHaveAttribute(
            "href",
            "/support"
        );
    });

    test("renders the mobile toggle button", () => {
        render(<Navbar />);

        expect(
            screen.getByRole("button", { name: /toggle navigation/i })
        ).toBeInTheDocument();
    });
});