import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Universe from "../landing_page/products/Universe";

describe("Universe Component", () => {
    test("renders the universe heading and description", () => {
        render(<Universe />);

        expect(screen.getByRole("heading", { name: "The Investa Universe" })).toBeInTheDocument();
        expect(screen.getByText(/partner platforms/i)).toBeInTheDocument();
    });

    test("renders six partner images and the signup button", () => {
        const { container } = render(<Universe />);

        expect(container.querySelectorAll("img")).toHaveLength(6);
        expect(screen.getByRole("button", { name: /signup now/i })).toBeInTheDocument();
    });
});