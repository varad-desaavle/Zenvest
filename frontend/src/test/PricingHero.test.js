import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/pricing/Hero";

describe("Pricing Hero Component", () => {
    test("renders the pricing heading and subtitle", () => {
        render(<Hero />);

        expect(screen.getByRole("heading", { name: "Pricing" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /free equity investments/i })).toBeInTheDocument();
    });

    test("renders all pricing offers and images", () => {
        const { container } = render(<Hero />);

        expect(screen.getByRole("heading", { name: /free equity delivery/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /intraday and f&o trades/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /free direct mf/i })).toBeInTheDocument();
        expect(container.querySelectorAll("img")).toHaveLength(3);
    });
});