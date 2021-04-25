import React, { useState, useEffect } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
// import { renderHook, act } from "@testing-library/react-hooks";
import { logRoles } from "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Quiz from "./Quiz";

afterEach(cleanup);

const Data = {
  easyStartUrl: "https://quickbooks.intuit.com/gutenberg/ca/pricing-easystart/",
  plusUrl: "https://quickbooks.intuit.com/gutenberg/ca/pricing-plus/",
  essentialsUrl:
    "https://quickbooks.intuit.com/gutenberg/ca/pricing-essentials/",
  selfemployedUrl:
    "https://quickbooks.intuit.com/gutenberg/ca/pricing-self-employed/"
};

describe("Quiz", () => {
  test("renders correctly", () => {
    jest.useFakeTimers();
    const { getByTestId } = render(<Quiz {...Data} />);
    fireEvent.click(getByTestId("welcomebutton"));
    fireEvent.click(getByTestId("Question1-yes"));
    fireEvent.click(getByTestId("Question2-yes"));
    fireEvent.click(getByTestId("Question3-yes"));
    fireEvent.click(getByTestId("Question4-yes"));
    fireEvent.click(getByTestId("Question5-yes"));
    fireEvent.click(getByTestId("Question6-yes"));
    console.log(getByTestId("quiz-question-Question7"));
    fireEvent.click(getByTestId("Question7-yes"));
    expect(window.location.href).toBe("https://ld9by.csb.app/");
    // expect(window.location.href).toBe("https://ld9by.csb.app/");
  });
});
