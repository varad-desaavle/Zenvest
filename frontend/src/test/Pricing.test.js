import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Pricing from "../landing_page/home/Pricing";

describe("Pricing Component", () => {

    test("renders main heading", () => {
        render(<Pricing />);

        expect(
            screen.getByRole("heading", {
                name: /unbeatable pricing/i
            })
        ).toBeInTheDocument();
    });

    test("renders pricing description", () => {
        render(<Pricing />);

        expect(
            screen.getByText(/discount broking and price transparency/i)
        ).toBeInTheDocument();
    });

    test("renders pricing values", () => {
        render(<Pricing />);

        expect(
            screen.getByRole("heading", {
                name: "₹0"
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: "₹20"
            })
        ).toBeInTheDocument();
    });

    test("renders pricing details", () => {
        render(<Pricing />);

        expect(
            screen.getByText(/free equity delivery and/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText("Intraday and F&O")
        ).toBeInTheDocument();
    });

    test("renders See Pricing link", () => {
        render(<Pricing />);

        const link = screen.getByText("See Pricing");
        expect(link).toBeInTheDocument();
        expect(link.closest("a")).toBeInTheDocument();
    });

});