import React from "react";

function QuizTwo({ prevPage, nextPage, setInputValue, state, setState }) {
  return (
    <>
      <h2>Question Two</h2>
      <div onClick={(event) => setInputValue("question2", "YES", setState)}>
        <p>YES</p>
      </div>
      <div onClick={(event) => setInputValue("question2", "NO", setState)}>
        <p>NO</p>
      </div>
    </>
  );
}

export default QuizTwo;
