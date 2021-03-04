import React from "react";
import "./Quiz.css";

function QuizQuestion({
  question,
  nextPage,
  prevPage,
  setInputValue,
  state,
  setState
}) {
  return (
    <>
      <h2>{question.question}</h2>
      <h3>{question.subquestion}</h3>
      {question.options.map((opt) => {
        return (
          <div
            key={opt.value}
            className={`option ${
              state[question.stateSet] === opt.value && `active`
            }`}
            onClick={(event) => {
              setInputValue(question.stateSet, opt.value, setState);
              nextPage(event);
            }}
          >
            <p>{opt.title}</p>
          </div>
        );
      })}
      {prevPage && (
        <button onClick={(event) => prevPage(event)}>Previous</button>
      )}
    </>
  );
}

export default QuizQuestion;
