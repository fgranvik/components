import React from "react";
import { render } from "@testing-library/react";

import ButtonGroup from "./ButtonGroup";

describe("Button", () => {
  test("renders the ButtonGroup component", () => {
    render(<ButtonGroup />);
  });
});
