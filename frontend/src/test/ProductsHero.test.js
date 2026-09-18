import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/products/Hero";

describe("Products Hero Component", () => {
    test("renders the technology heading and subtitle", () => {
        render(<Hero />);

        expect(screen.getByRole("heading", { name: "Technology" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /sleek, modern and intuitive/i })).toBeInTheDocument();
    });

    test("renders the investment offerings link", () => {
        render(<Hero />);

        expect(screen.getByText("investment offerings").closest("a")).toBeInTheDocument();
    });
});