import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutPage from "../landing_page/about/AboutPage";

describe("AboutPage Component", () => {
    test("renders the people section", () => {
        render(<AboutPage />);

        expect(screen.getByRole("heading", { name: "People" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Varad Desavale" })).toBeInTheDocument();
        expect(screen.getByText("Founder, CEO")).toBeInTheDocument();
    });

    test("renders the team profile image and links", () => {
        const { container } = render(<AboutPage />);

        expect(container.querySelector("img")).toHaveAttribute(
            "src",
            "media/images/nithinKamath.png"
        );
        expect(screen.getByText("Homepage").closest("a")).toBeInTheDocument();
        expect(screen.getByText("Twitter").closest("a")).toBeInTheDocument();
    });
});