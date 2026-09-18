import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../landing_page/Footer";

describe("Footer Component", () => {
    test("renders the logo and footer sections", () => {
        const { container } = render(<Footer />);

        expect(container.querySelector("img")).toHaveAttribute(
            "src",
            "media/images/logo.svg"
        );
        expect(screen.getByText("Company")).toBeInTheDocument();
        expect(screen.getByText("Support")).toBeInTheDocument();
        expect(screen.getByText("Account")).toBeInTheDocument();
    });

    test("renders important account links", () => {
        render(<Footer />);

        expect(screen.getByText("Open an account").closest("a")).toBeInTheDocument();
        expect(screen.getByText("Fund transfer").closest("a")).toBeInTheDocument();
        expect(screen.getByText("Support portal").closest("a")).toBeInTheDocument();
    });
});