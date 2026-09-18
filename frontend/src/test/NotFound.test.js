import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "../landing_page/NotFound";

describe("NotFound Component", () => {
    test("renders the not found message", () => {
        render(<NotFound />);

        expect(screen.getByRole("heading", { name: "404 Not Found" })).toBeInTheDocument();
        expect(
            screen.getByText(/the page you are looking for does not exist/i)
        ).toBeInTheDocument();
    });
});