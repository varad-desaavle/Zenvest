import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LeftSection from "../landing_page/products/LeftSection";

describe("Products LeftSection Component", () => {
    test("renders the product image, name, and description", () => {
        render(
            <LeftSection
                imageURL="media/images/kite.png"
                productName="Star"
                productDesription="A fast trading platform."
                tryDemo="/demo"
                learnMore="/learn"
                googlePlay="/google-play"
                appStore="/app-store"
            />
        );

        expect(screen.getByAltText("Star")).toHaveAttribute(
            "src",
            "media/images/kite.png"
        );
        expect(screen.getByRole("heading", { name: "Star" })).toBeInTheDocument();
        expect(screen.getByText("A fast trading platform.")).toBeInTheDocument();
    });

    test("renders the product and app links", () => {
        render(
            <LeftSection
                imageURL="media/images/kite.png"
                productName="Star"
                productDesription="Description"
                tryDemo="/demo"
                learnMore="/learn"
                googlePlay="/google-play"
                appStore="/app-store"
            />
        );

        expect(screen.getByRole("link", { name: "Try Demo" })).toHaveAttribute("href", "/demo");
        expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute("href", "/learn");
        expect(screen.getByAltText("Google Play")).toHaveAttribute("src", "media/images/googlePlayBadge.svg");
        expect(screen.getByAltText("App Store")).toHaveAttribute("src", "media/images/appstoreBadge.svg");
    });
});