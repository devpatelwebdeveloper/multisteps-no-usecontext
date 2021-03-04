import React from "react";
import "./Quiz.css";

function QuizOne({ question, nextPage, setInputValue, state, setState }) {
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

  return (
    <>
      <h2>{Que.question}</h2>
      <h3>{Que.subquestion}</h3>
      {Que.options.map((opt) => {
        return (
          <div
            key={opt.value}
            className={`option ${state.question1 === opt.value && `active`}`}
            onClick={(event) => {
              setInputValue(Que.stateSet, opt.value, setState);
              nextPage(event);
            }}
          >
            <p>{opt.title}</p>
          </div>
        );
      })}
    </>
  );
}

export default QuizOne;
