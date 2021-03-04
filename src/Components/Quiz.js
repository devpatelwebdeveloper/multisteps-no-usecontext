import React, { useState, useEffect } from "react";
import QuizQuestion from "./Questions/QuizQuestion";

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
  const Ques = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      stateSet: "question4",
      question: "Question 4",
      subquestion: "Sub Question4",
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
    },
    {
      stateSet: "question5",
      question: "Question 5",
      subquestion: "Sub Question5",
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
    },
    {
      stateSet: "question6",
      question: "Question 6",
      subquestion: "Sub Question6",
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
    },
    {
      stateSet: "question7",
      question: "Question 7",
      subquestion: "Sub Question7",
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
    }
  ];

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

  for (let i = mode; i <= Ques.length + 1; i++) {
    //Start
    if (i === 0) {
      return (
        <button
          onClick={() => {
            transition(mode + 1);
          }}
        >
          Start Quiz
        </button>
      );
    }
    //After Completion Show this
    else if (i === Ques.length + 1) {
      return <>{JSON.stringify(state)}</>;
    }
    //Quiz Steps
    return (
      <>
        {mode === i && (
          <QuizQuestion
            question={Ques[i - 1]}
            state={state}
            setState={setState}
            setInputValue={setInputValue}
            prevPage={i > 1 && prevPage}
            nextPage={nextPage}
          />
        )}
      </>
    );
  }
}

export default Quiz;
