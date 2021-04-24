import React, { useState } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import Quiz from "./Quiz";

afterEach(cleanup);

describe("Quiz", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<Quiz />);
    fireEvent.click(getByTestId("welcomebutton"));
    fireEvent.click(getByTestId("Question1-yes"));
    fireEvent.click(getByTestId("Question2-yes"));
    fireEvent.click(getByTestId("Question3-yes"));
    fireEvent.click(getByTestId("Question4-yes"));
    fireEvent.click(getByTestId("Question5-yes"));
    fireEvent.click(getByTestId("Question6-yes"));
    fireEvent.click(getByTestId("Question7-yes"));
  });
});
