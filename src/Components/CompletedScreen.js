import React, { useState, useEffect } from "react";

export default function DisplayAnswer({ recommendation }) {
  const [productTitle, setProductTitle] = useState("easystart");
  //Set package
  const doAnswerEasyStart = () => {
    setProductTitle("EASY START");
  };
  const doAnswerEssentials = () => {
    setProductTitle("ESSENTIALS");
  };
  const doAnswerPlus = () => {
    setProductTitle("PLUS");
  };
  const doAnswerSelfEmployed = () => {
    setProductTitle("SELF EMPLOYED");
  };

  useEffect(() => {
    switch (recommendation) {
      case "easystart":
        doAnswerEasyStart();
        break;
      case "essentials":
        doAnswerEssentials();
        break;
      case "plus":
        doAnswerPlus();
        break;
      case "selfemployed":
        doAnswerSelfEmployed();
        break;
      default:
        doAnswerEasyStart();
        break;
    }
  }, [recommendation]);

  return (
    <>
      <h1>Display Answer here</h1>
      <h2 data-testid="answer">Your Recommended feature is {productTitle}</h2>
    </>
  );
}
