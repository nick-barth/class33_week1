import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

const server = setupServer(
  rest.get("https://www.randomuser.me/api", (req, res, ctx) => {
    console.log("wherjnajnjds");
    return res(ctx.json({ results: [{ email: "itworks" }] }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and people list", async () => {
  render(<App />);
  await waitFor(() => screen.getByRole("heading"));

  expect(screen.getByRole("heading")).toHaveTextContent("people list");
});

test("number input is displayed", async () => {
  render(<App />);
  await waitFor(() => screen.getByLabelText("Limit"));

  expect(screen.getByLabelText("Limit").type).toBe("number");
});

test("does page load data", async () => {
  render(<App />);
  await screen.findByText("itworks");

  expect(screen.getByText("itworks")).toBeInTheDocument();
});
