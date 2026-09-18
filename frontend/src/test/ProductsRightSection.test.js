import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RightSection from "../landing_page/products/RightSection";

describe("Products RightSection Component", () => {
    test("renders the product name and description", () => {
        render(
            <RightSection
                imageURL="media/images/console.png"
                productName="Console"
                productDesription="Account reports and insights."
                learnMore="/learn"
            />
        );

        expect(screen.getByRole("heading", { name: "Console" })).toBeInTheDocument();
        expect(screen.getByText("Account reports and insights.")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute("href", "/learn");
    });

    test("renders the supplied product image", () => {
        const { container } = render(
            <RightSection
                imageURL="media/images/console.png"
                productName="Console"
                productDesription="Description"
                learnMore=""
            />
        );

        expect(container.querySelector("img")).toHaveAttribute(
            "src",
            "media/images/console.png"
        );
    });
});