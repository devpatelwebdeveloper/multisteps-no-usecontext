import React from "react";

function QuizOne({ prevPage, nextPage, setInputValue, state, setState }) {
  return (
    <>
      <h2>Question One</h2>
      <div onClick={(event) => setInputValue("question1", "YES", setState)}>
        <p>YES</p>
      </div>
      <div onClick={(event) => setInputValue("question1", "NO", setState)}>
        <p>NO</p>
      </div>
    </>
  );
}

export default QuizOne;
