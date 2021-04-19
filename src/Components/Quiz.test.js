import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  screen,
  waitFor
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Quiz from "./Quiz";

afterEach(cleanup);

describe("Quiz", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<Quiz />);
    expect(asFragment()).toMatchSnapshot();
  });
});
