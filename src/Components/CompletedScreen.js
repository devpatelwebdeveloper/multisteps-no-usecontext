import React, { useState, useEffect } from "react";

export default function DisplayAnswer({ recommendation }) {
  const [productTitle, setProductTitle] = useState("easystart");
  //Handle Click
  const handleClick = (cardHighlight) => {
    const pricingcards = document.getElementById("pricingCards");
    const cardToHighlight = document.getElementById(cardHighlight);
    pricingcards.classList.toggle("pricingCardShow");
    pricingcards.classList.toggle("pricingCardHide");
    cardToHighlight.classList.toggle("pricingCardRecommended");
    // pricingcards.firstElementChild.classList.toggle("pricingCardHide");
    cardToHighlight.firstElementChild.classList.toggle("showRecommended");
    cardToHighlight.firstElementChild.classList.toggle("hideRecomemended");
  };
  //Set package
  const doAnswerEasyStart = () => {
    setProductTitle("EASY START");
    handleClick("easyStart");
  };
  const doAnswerEssentials = () => {
    setProductTitle("ESSENTIALS");
    handleClick("essentials");
  };
  const doAnswerPlus = () => {
    setProductTitle("PLUS");
    handleClick("plus");
  };
  const doAnswerSelfEmployed = () => {
    setProductTitle("SELF EMPLOYED");
    handleClick("selfEmployed");
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
