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
    <div data-testid={`quiz-question-${question.question.replace(/\s/g, "")}`}>
      <h2>{question.question}</h2>
      <h3>{question.subquestion}</h3>
      <div className="options">
        {question.options.map((opt) => {
          return (
            <div
              data-testid={`${question.question.replace(/\s/g, "")}-${
                opt.value
              }`}
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
      </div>
      {prevPage && (
        <button onClick={(event) => prevPage(event)}>Previous</button>
      )}
    </div>
  );
}

export default QuizQuestion;
