import React from "react";
import "./Quiz.css";

function QuizTwo({ prevPage, nextPage, setInputValue, state, setState }) {
  return (
    <>
      <h2>Question Two</h2>
      <div
        className="option"
        onClick={(event) => {
          setInputValue("question2", "YES", setState);
          nextPage(event);
        }}
      >
        <p>YES</p>
      </div>
      <div
        className="option"
        onClick={(event) => {
          setInputValue("question2", "NO", setState);
          nextPage(event);
        }}
      >
        <p>NO</p>
      </div>
      <button onClick={(event) => prevPage(event)}>Previous</button>
    </>
  );
}

export default QuizTwo;
