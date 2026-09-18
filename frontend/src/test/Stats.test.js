import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Stats from "../landing_page/home/Stats";

describe("Stats Component", () => {

    test("renders main heading", () => {
        render(<Stats />);

        expect(
            screen.getByRole("heading", {
                name: /trust with confidence/i
            })
        ).toBeInTheDocument();
    });

    test("renders all section headings", () => {
        render(<Stats />);

        expect(
            screen.getByRole("heading", {
                name: /customer-first always/i
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: /no spam or gimmicks/i
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: /the investa universe/i
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: /do better with money/i
            })
        ).toBeInTheDocument();
    });

    test("renders ecosystem image", () => {
        const { container } = render(<Stats />);

        const image = container.querySelector("img");

        expect(image).toBeInTheDocument();

        expect(image).toHaveAttribute(
            "src",
            "media/images/ecosystem.png"
        );
    });

    test("renders product links", () => {
        render(<Stats />);

        const productsLink = screen.getByText("Explore our products");
        expect(productsLink).toBeInTheDocument();
        expect(productsLink.closest("a")).toBeInTheDocument();

        const demoLink = screen.getByText("Try Kite demo");
        expect(demoLink).toBeInTheDocument();
        expect(demoLink.closest("a")).toBeInTheDocument();
    });

});