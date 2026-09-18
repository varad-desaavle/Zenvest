import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsPage from "../landing_page/products/ProductsPage";

jest.mock("../landing_page/Navbar", () => () => <div>Navbar</div>);
jest.mock("../landing_page/Footer", () => () => <div>Footer</div>);

describe("ProductsPage Component", () => {
    test("renders the technology heading and product sections", () => {
        render(<ProductsPage />);

        expect(screen.getByRole("heading", { name: "Technology" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Star" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Console" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Coin" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Star Connect API" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Varsity mobile" })).toBeInTheDocument();
    });

    test("renders the universe section", () => {
        render(<ProductsPage />);

        expect(screen.getByRole("heading", { name: "The Investa Universe" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /signup now/i })).toBeInTheDocument();
    });
});