import { siteConfig } from "@/config/site";
import { render, screen } from "@testing-library/react";
import * as React from "react";

import { MainNav } from "./main-nav";

describe("components.MainNav", () => {
  test("site name has correct text", () => {
    render(<MainNav />);

    // Verify if the site name has the correct text
    const siteNameElement = screen.getByText(siteConfig.name);
    expect(siteNameElement).toHaveTextContent(siteConfig.name);
  });
});
