import React, { useState, useEffect } from "react";
import QuizQuestion from "./Questions/QuizQuestion";
import QuizOne from "./Questions/QuizOne";
import QuizTwo from "./Questions/QuizTwo";
import setInputValue from "./utils/SetInputValue";
import useVisualMode from "./utils/UseVisualMode";

function Quiz() {
  const [state, setState] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",

    inputAdded: false
  });
  const { mode, transition } = useVisualMode(0);

  //Questions Start
  const Que = {
    stateSet: "question1",
    question: "Question 1",
    subquestion: "Sub Question1",
    options: [
      {
        value: "yes",
        title: "YES"
      },
      {
        value: "no",
        title: "NO"
      },
      {
        value: "na",
        title: "N/A"
      }
    ]
  };
  const Que2 = {
    stateSet: "question2",
    question: "Question 2",
    subquestion: "Sub Question2",
    options: [
      {
        value: "yes",
        title: "YES"
      },
      {
        value: "no",
        title: "NO"
      },
      {
        value: "na",
        title: "N/A"
      }
    ]
  };
  const Que3 = {
    stateSet: "question3",
    question: "Question 3",
    subquestion: "Sub Question3",
    options: [
      {
        value: "yes",
        title: "YES"
      },
      {
        value: "no",
        title: "NO"
      },
      {
        value: "na",
        title: "N/A"
      }
    ]
  };

  //Question Ends

  //Next Page
  const nextPage = (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      inputAdded: true
    }));
  };
  // Previous Page
  const prevPage = (event) => {
    event.preventDefault();
    transition(mode - 1);
  };

  //Use Effect to check if added
  useEffect(() => {
    if (state.inputAdded === true) {
      transition(mode + 1);
      setState((prev) => ({
        ...prev,
        inputAdded: false
      }));

      if (mode === 8) {
        console.log("STATE...", state);
      }
    } else {
      // if they haven't, just set inputAdded to false - this is just to reset state
      setState((prev) => ({
        ...prev,
        inputAdded: false
      }));
    }
  }, [state.inputAdded]);

  //After Completion Show this
  if (mode === 4) {
    return <>{JSON.stringify(state)}</>;
  }

  //Show Quiz
  return (
    <>
      <h2>Main Quiz</h2>

      {mode === 0 && (
        <button
          onClick={() => {
            transition(mode + 1);
          }}
        >
          Start Quiz
        </button>
      )}
      {mode === 1 && (
        <QuizQuestion
          question={Que}
          state={state}
          setState={setState}
          setInputValue={setInputValue}
          nextPage={nextPage}
        />
      )}
      {mode === 2 && (
        <QuizQuestion
          question={Que2}
          state={state}
          setState={setState}
          setInputValue={setInputValue}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
      {mode === 3 && (
        <QuizQuestion
          question={Que3}
          state={state}
          setState={setState}
          setInputValue={setInputValue}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}

      {/* {mode === 1 && (
        <QuizOne
          nextPage={nextPage}
          state={state}
          setState={setState}
          setInputValue={setInputValue}
        />
      )}
      {mode === 2 && (
        <QuizTwo
          state={state}
          setState={setState}
          setInputValue={setInputValue}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}*/}
    </>
  );
}

export default Quiz;
