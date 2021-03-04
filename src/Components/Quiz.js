import React, { useState, useEffect } from "react";
import QuizOne from "./Questions/QuizOne";
import QuizTwo from "./Questions/QuizTwo";
import setInputValue from "./utils/SetInputValue";

function Quiz() {
  const [state, setState] = useState({
    question1: "",
    question2: ""
  });
  return (
    <>
      <h2>Main Quiz</h2>
      <QuizOne
        state={state}
        setState={setState}
        setInputValue={setInputValue}
      />
      <QuizTwo
        state={state}
        setState={setState}
        setInputValue={setInputValue}
      />
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        Submit
      </button>
    </>
  );
}

export default Quiz;
