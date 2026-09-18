import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Awards from "../landing_page/home/Awards";

describe("Awards Component", () => {

    test("renders main heading", () => {
        render(<Awards />);

        expect(
            screen.getByRole("heading", {
                name: /largest stock broker in india/i
            })
        ).toBeInTheDocument();
    });

    test("renders description", () => {
        render(<Awards />);

        expect(
            screen.getByText(/2\+ million Investa clients/i)
        ).toBeInTheDocument();
    });

    test("renders investment categories", () => {
        render(<Awards />);

        expect(
            screen.getByText("Futures and Options")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Commodity derivatives")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Currency derivatives")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Stocks & IPOs")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Direct mutual funds")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Bonds and Govt. Securities")
        ).toBeInTheDocument();
    });

    test("renders images", () => {
        const { container } = render(<Awards />);

        const images = container.querySelectorAll("img");

        expect(images).toHaveLength(2);

        expect(images[0]).toHaveAttribute(
            "src",
            "media/images/largestBroker.svg"
        );

        expect(images[1]).toHaveAttribute(
            "src",
            "media/images/pressLogos.png"
        );
    });

});