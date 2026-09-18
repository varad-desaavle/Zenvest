import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Education from "../landing_page/home/Education";

describe("Education Component", () => {

    test("renders main heading", () => {
        render(<Education />);

        expect(
            screen.getByRole("heading", {
                name: /free and open market education/i
            })
        ).toBeInTheDocument();
    });

    test("renders education description", () => {
        render(<Education />);

        expect(
            screen.getByText(/largest online stock market education book/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/most active trading and investment community/i)
        ).toBeInTheDocument();
    });

    test("renders education image", () => {
        const { container } = render(<Education />);

        const image = container.querySelector("img");

        expect(image).toBeInTheDocument();

        expect(image).toHaveAttribute(
            "src",
            "media/images/education.svg"
        );
    });

    test("renders Versity link", () => {
        render(<Education />);

        const link = screen.getByText("Versity");
        expect(link).toBeInTheDocument();
        expect(link.closest("a")).toBeInTheDocument();
    });

    test("renders TradingQ&A link", () => {
        render(<Education />);

        const link = screen.getByText("TradingQ&A");
        expect(link).toBeInTheDocument();
        expect(link.closest("a")).toBeInTheDocument();
    });

});