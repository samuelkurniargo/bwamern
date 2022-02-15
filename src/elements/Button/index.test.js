import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Button from "./index";

test("Should not allowed click button if isDisable is present", () => {
  const { container } = render(<Button isDisable></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  //   const { container, getByText } = render(<Button isLoading></Button>);

  //   expect(getByText(/loading/i)).toBeInTheDocument();
  //   expect(container.querySelector("span")).toBeInTheDocument();

  // Format Penulisan yang benar menurut EsLint
  const { container } = render(<Button isLoading></Button>);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});