import { describe, expect, it } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { Route as productRoute } from "@/routes/product_.$slug";
import { routeTree } from "@/routeTree.gen";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

describe("Product Details Page (/product/iphone-18-pro-max)", () => {
  it("matches the product route for /product/iphone-18-pro-max", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes("/product/iphone-18-pro-max");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/product_/$slug");
  });

  it("renders product title, breadcrumbs, price without '(Cash Price)', and sku", () => {
    const Component = (productRoute.options as any).component;
    render(<Component />);

    // Title
    expect(screen.getByTestId("product-title")).toHaveTextContent("iPhone 18 Pro Max");

    // Price without (Cash Price)
    const priceEl = screen.getByTestId("cash-price");
    expect(priceEl).toHaveTextContent("৳ 225,999");
    expect(screen.queryByText("(Cash Price)")).not.toBeInTheDocument();

    expect(screen.getByTestId("sku-code")).toHaveTextContent("AGL147422");

    // Breadcrumbs
    const breadcrumbs = screen.getByTestId("product-breadcrumbs");
    expect(within(breadcrumbs).getByRole("link", { name: "Mobile Phone" })).toBeInTheDocument();
    expect(within(breadcrumbs).getByRole("link", { name: "iPhone" })).toBeInTheDocument();
  });

  it("does not render region, storage, warranty/activation box, EMI, guidance, 2-days offer, or compare buttons", () => {
    const Component = (productRoute.options as any).component;
    render(<Component />);

    expect(screen.queryByText("Add to Compare")).not.toBeInTheDocument();
    expect(screen.queryByText(/2 DAYS OFFER/i)).not.toBeInTheDocument();
    expect(screen.queryByText("EMI Available")).not.toBeInTheDocument();
    expect(screen.queryByText("Need Guidance?")).not.toBeInTheDocument();
    expect(screen.queryByText(/Activation is Mandatory/i)).not.toBeInTheDocument();
    expect(screen.queryByText("Region:")).not.toBeInTheDocument();
    expect(screen.queryByText("Storage:")).not.toBeInTheDocument();
  });

  it("renders 4-5 bullet points short description under color", () => {
    const Component = (productRoute.options as any).component;
    render(<Component />);

    const shortDesc = screen.getByTestId("short-description");
    expect(shortDesc).toBeInTheDocument();
    const items = shortDesc.querySelectorAll("li");
    expect(items.length).toBeGreaterThanOrEqual(4);
    expect(items.length).toBeLessThanOrEqual(6);
  });

  it("updates selected color on color click", () => {
    const Component = (productRoute.options as any).component;
    render(<Component />);

    const burgundyBtn = screen.getByTestId("color-select-burgundy");
    fireEvent.click(burgundyBtn);

    expect(screen.getByTestId("selected-color-label")).toHaveTextContent("Burgundy");
  });

  it("increments and decrements quantity via stepper", () => {
    const Component = (productRoute.options as any).component;
    render(<Component />);

    const display = screen.getByTestId("qty-display");
    expect(display).toHaveTextContent("1");

    const plusBtn = screen.getByTestId("qty-plus-btn");
    fireEvent.click(plusBtn);
    expect(display).toHaveTextContent("2");

    const minusBtn = screen.getByTestId("qty-minus-btn");
    fireEvent.click(minusBtn);
    expect(display).toHaveTextContent("1");

    // Doesn't go below 1
    fireEvent.click(minusBtn);
    expect(display).toHaveTextContent("1");
  });

  it("has exactly 2 tabs (Description and Reviews) styled with website vibes and no tables in description", () => {
    const Component = (productRoute.options as any).component;
    render(<Component />);

    const descBtn = screen.getByTestId("tab-description-btn");
    const reviewsBtn = screen.getByTestId("tab-reviews-btn");

    expect(descBtn).toBeInTheDocument();
    expect(reviewsBtn).toBeInTheDocument();

    // Default tab is description
    const descContent = screen.getByTestId("tab-description-content");
    expect(descContent).toBeInTheDocument();
    expect(screen.queryByTestId("tab-reviews-content")).not.toBeInTheDocument();

    // Verify specification headline exists
    expect(screen.getByText("iPhone 18 Pro Max Specification")).toBeInTheDocument();
    expect(screen.getByText("iPhone 18 Pro Max Features")).toBeInTheDocument();

    // Verify NO <table> is used in description (per user requirement)
    const tablesInDesc = descContent.querySelectorAll("table");
    expect(tablesInDesc.length).toBe(0);
  });

  it("switches to Reviews tab and submits a new review", () => {
    const Component = (productRoute.options as any).component;
    render(<Component />);

    const reviewsBtn = screen.getByTestId("tab-reviews-btn");
    fireEvent.click(reviewsBtn);

    // Description is hidden, Reviews is visible
    expect(screen.queryByTestId("tab-description-content")).not.toBeInTheDocument();
    expect(screen.getByTestId("tab-reviews-content")).toBeInTheDocument();

    // Existing review author
    expect(screen.getByText("Tanvir Ahmed")).toBeInTheDocument();

    // Fill in new review
    const nameInput = screen.getByTestId("review-name-input");
    const commentInput = screen.getByTestId("review-comment-input");
    const submitBtn = screen.getByTestId("submit-review-btn");

    fireEvent.change(nameInput, { target: { value: "Ashfaq Karim" } });
    fireEvent.change(commentInput, { target: { value: "Unbelievable battery life and gorgeous titanium chassis!" } });
    fireEvent.click(submitBtn);

    // Check newly added review is rendered
    expect(screen.getByText("Ashfaq Karim")).toBeInTheDocument();
    expect(screen.getByText("Unbelievable battery life and gorgeous titanium chassis!")).toBeInTheDocument();
  });
});
