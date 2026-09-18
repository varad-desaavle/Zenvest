import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HomePage from "../landing_page/home/HomePage";

jest.mock("../landing_page/home/Hero", () => () => (
    <div data-testid="hero">Hero</div>
));

jest.mock("../landing_page/home/Awards", () => () => (
    <div data-testid="awards">Awards</div>
));

jest.mock("../landing_page/home/Stats", () => () => (
    <div data-testid="stats">Stats</div>
));

jest.mock("../landing_page/home/Pricing", () => () => (
    <div data-testid="pricing">Pricing</div>
));

jest.mock("../landing_page/home/Education", () => () => (
    <div data-testid="education">Education</div>
));

jest.mock("../landing_page/OpenAccount", () => () => (
    <div data-testid="open-account">Open Account</div>
));

jest.mock("../landing_page/Navbar", () => () => (
    <div data-testid="navbar">Navbar</div>
));

jest.mock("../landing_page/Footer", () => () => (
    <div data-testid="footer">Footer</div>
));

describe("HomePage Component", () => {

    test("renders Hero section", () => {
        render(<HomePage />);
        expect(screen.getByTestId("hero")).toBeInTheDocument();
    });

    test("renders Awards section", () => {
        render(<HomePage />);
        expect(screen.getByTestId("awards")).toBeInTheDocument();
    });

    test("renders Stats section", () => {
        render(<HomePage />);
        expect(screen.getByTestId("stats")).toBeInTheDocument();
    });

    test("renders Pricing section", () => {
        render(<HomePage />);
        expect(screen.getByTestId("pricing")).toBeInTheDocument();
    });

    test("renders Education section", () => {
        render(<HomePage />);
        expect(screen.getByTestId("education")).toBeInTheDocument();
    });

    test("renders Open Account section", () => {
        render(<HomePage />);
        expect(screen.getByTestId("open-account")).toBeInTheDocument();
    });

});