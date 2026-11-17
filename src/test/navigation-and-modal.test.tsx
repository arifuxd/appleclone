import { describe, expect, it } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { Header } from "@/components/Header";
import { Route as indexRoute } from "@/routes/index";
import { Route as offerRoute } from "@/routes/offer";
import { Route as preOrderRoute } from "@/routes/pre-order";
import { Route as pcBuilderRoute } from "@/routes/tools_.pc-builder";

describe("1. Page scrolling restoration", () => {
  it("ensures body.className does not include overflow-hidden across imported routes", () => {
    const routes = [
      { name: "index", route: indexRoute },
      { name: "offer", route: offerRoute },
      { name: "pre-order", route: preOrderRoute },
      { name: "pc-builder", route: pcBuilderRoute },
    ];

    for (const { name, route } of routes) {
      const bodyClass = (route.options.staticData as any)?.importedDocument?.body?.className || "";
      expect(bodyClass, `${name} route body className should not have overflow-hidden`).not.toContain("overflow-hidden");
    }
  });
});

describe("2. Header Navigation and Menus", () => {
  it("renders header links pointing to valid routes", () => {
    render(<Header />);

    const blogLink = screen.getByTestId("header-blog-link");
    expect(blogLink).toHaveAttribute("href", "/blog");

    const preOrderLink = screen.getByTestId("header-pre-order-link");
    expect(preOrderLink).toHaveAttribute("href", "/pre-order");

    const offerLink = screen.getByTestId("header-offer-link");
    expect(offerLink).toHaveAttribute("href", "/offer");

    const logoLink = screen.getByTestId("header-logo-link");
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("toggles mobile category drawer via mobile hamburger button and close button", () => {
    render(<Header />);

    const hamburgerBtn = screen.getByTestId("mobile-hamburger-btn");
    expect(hamburgerBtn).toHaveAttribute("aria-label", "Open");
    expect(screen.queryByTestId("mobile-category-drawer")).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(hamburgerBtn);
    expect(hamburgerBtn).toHaveAttribute("aria-label", "Close");
    const drawer = screen.getByTestId("mobile-category-drawer");
    expect(drawer).toBeInTheDocument();

    // Check links within drawer specifically
    expect(within(drawer).getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(within(drawer).getByRole("link", { name: "PC Builder" })).toHaveAttribute("href", "/tools/pc-builder");
    expect(within(drawer).getByRole("link", { name: "Offers" })).toHaveAttribute("href", "/offer");
    expect(within(drawer).getByRole("link", { name: "Pre-order" })).toHaveAttribute("href", "/pre-order");
    expect(within(drawer).getByRole("link", { name: "Blog" })).toHaveAttribute("href", "/blog");

    // Click close button inside drawer
    const closeBtn = screen.getByTestId("mobile-drawer-close-btn");
    fireEvent.click(closeBtn);
    expect(screen.queryByTestId("mobile-category-drawer")).not.toBeInTheDocument();
  });

  it("toggles mobile category drawer via mobile bottom bar Category button", () => {
    render(<Header />);

    const bottomCatBtn = screen.getByTestId("mobile-bottom-category-btn");
    expect(screen.queryByTestId("mobile-category-drawer")).not.toBeInTheDocument();

    fireEvent.click(bottomCatBtn);
    expect(screen.getByTestId("mobile-category-drawer")).toBeInTheDocument();

    fireEvent.click(bottomCatBtn);
    expect(screen.queryByTestId("mobile-category-drawer")).not.toBeInTheDocument();
  });

  it("toggles desktop Tools dropdown on click and exposes tools links", () => {
    render(<Header />);

    const toolsBtn = screen.getByTestId("desktop-tools-dropdown-btn");
    const toolsMenu = screen.getByTestId("desktop-tools-dropdown-menu");

    expect(toolsBtn).toHaveAttribute("aria-expanded", "false");
    expect(toolsMenu.className).toContain("hidden");

    // Click to open
    fireEvent.click(toolsBtn);
    expect(toolsBtn).toHaveAttribute("aria-expanded", "true");
    expect(toolsMenu.className).toContain("block");

    // Check menu options
    const pcBuilderLink = screen.getByTestId("tools-pc-builder-link");
    expect(pcBuilderLink).toHaveAttribute("href", "/tools/pc-builder");

    const btuCalcLink = screen.getByTestId("tools-btu-calculator-link");
    expect(btuCalcLink).toHaveAttribute("href", "/btu-calculator");

    const compareLink = screen.getByTestId("tools-compare-link");
    expect(compareLink).toHaveAttribute("href", "/compare");

    // Click to close
    fireEvent.click(toolsBtn);
    expect(toolsBtn).toHaveAttribute("aria-expanded", "false");
    expect(toolsMenu.className).toContain("hidden");
  });

  it("toggles desktop Category dropdown on click", () => {
    render(<Header />);

    const categoryBtn = screen.getByTestId("desktop-category-dropdown-btn");
    const categoryMenu = screen.getByTestId("desktop-category-dropdown-menu");

    expect(categoryBtn).toHaveAttribute("aria-expanded", "false");
    expect(categoryMenu.className).toContain("hidden");

    fireEvent.click(categoryBtn);
    expect(categoryBtn).toHaveAttribute("aria-expanded", "true");
    expect(categoryMenu.className).toContain("block");

    fireEvent.click(categoryBtn);
    expect(categoryBtn).toHaveAttribute("aria-expanded", "false");
    expect(categoryMenu.className).toContain("hidden");
  });
});

describe("3. Promo Modal Dismissible", () => {
  it("dismisses the homepage promo modal when close button is clicked", () => {
    const Component = (indexRoute.options as any).component;
    render(<Component />);

    expect(screen.getByTestId("promo-modal-backdrop")).toBeInTheDocument();
    const closeBtn = screen.getByTestId("promo-modal-close-btn");
    fireEvent.click(closeBtn);

    expect(screen.queryByTestId("promo-modal-backdrop")).not.toBeInTheDocument();
  });

  it("dismisses the promo modal when backdrop is clicked, but not when modal content is clicked", () => {
    const Component = (indexRoute.options as any).component;
    render(<Component />);

    const content = screen.getByTestId("promo-modal-content");
    const backdrop = screen.getByTestId("promo-modal-backdrop");

    // Clicking content directly should not dismiss modal
    fireEvent.click(content);
    expect(screen.getByTestId("promo-modal-backdrop")).toBeInTheDocument();

    // Clicking backdrop should dismiss modal
    fireEvent.click(backdrop);
    expect(screen.queryByTestId("promo-modal-backdrop")).not.toBeInTheDocument();
  });

  it("works on offer, pre-order, and pc-builder pages as well", () => {
    const pages = [
      { name: "offer", route: offerRoute },
      { name: "pre-order", route: preOrderRoute },
      { name: "pc-builder", route: pcBuilderRoute },
    ];

    for (const { route } of pages) {
      const Comp = (route.options as any).component;
      const { unmount } = render(<Comp />);

      const closeBtn = screen.getByTestId("promo-modal-close-btn");
      expect(screen.getByTestId("promo-modal-backdrop")).toBeInTheDocument();

      fireEvent.click(closeBtn);
      expect(screen.queryByTestId("promo-modal-backdrop")).not.toBeInTheDocument();

      unmount();
    }
  });
});
