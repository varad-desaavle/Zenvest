import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Brokerage from "../landing_page/pricing/Brokerage";

describe("Brokerage Component", () => {
    test("renders brokerage links", () => {
        render(<Brokerage />);

        expect(screen.getByRole("heading", { name: "Brokerage calculator" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "List of charges" })).toBeInTheDocument();
    });

    test("renders the brokerage charge details", () => {
        render(<Brokerage />);

        expect(screen.getByText(/call & trade and rms auto-squareoff/i)).toBeInTheDocument();
        expect(screen.getByText(/digital contract notes/i)).toBeInTheDocument();
        expect(screen.getByText(/nri account \(pis\)/i)).toBeInTheDocument();
    });
});