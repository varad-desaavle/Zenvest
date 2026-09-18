import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OpenAccount from "../landing_page/OpenAccount";

describe("OpenAccount Component", () => {
    test("renders the account heading and description", () => {
        render(<OpenAccount />);

        expect(
            screen.getByRole("heading", { name: /open a investa account/i })
        ).toBeInTheDocument();
        expect(screen.getByText(/modern platforms and apps/i)).toBeInTheDocument();
    });

    test("renders the signup button", () => {
        render(<OpenAccount />);

        expect(
            screen.getByRole("button", { name: /sign up now/i })
        ).toBeInTheDocument();
    });
});