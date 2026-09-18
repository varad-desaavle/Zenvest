import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signup from "../landing_page/signup/Signup";

describe("Signup Component", () => {
    test("renders the signup heading", () => {
        render(<Signup />);

        expect(screen.getByRole("heading", { name: "Signup" })).toBeInTheDocument();
    });
});