import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PricingPage from "../landing_page/pricing/PricingPage";

describe("PricingPage Component", () => {
    test("renders pricing, account, and brokerage content", () => {
        render(<PricingPage />);

        expect(screen.getByRole("heading", { name: "Pricing" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /open a investa account/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Brokerage calculator" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "List of charges" })).toBeInTheDocument();
    });

    test("renders the account signup button", () => {
        render(<PricingPage />);

        expect(screen.getByRole("button", { name: /sign up now/i })).toBeInTheDocument();
    });
});