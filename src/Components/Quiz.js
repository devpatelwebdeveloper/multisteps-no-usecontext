import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import QuizQuestion from "./Questions/QuizQuestion";
import Welcome from "./WelcomeScreen";
import DisplayAnswer from "./CompletedScreen";
import setInputValue from "./utils/SetInputValue";
import useVisualMode from "./utils/UseVisualMode";

const quizElement = document.getElementById("qbo-prod-quiz");

function Quiz({ easyStartUrl, plusUrl, essentialsUrl, selfemployedUrl }) {
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
  const [recommendation, setRecommendation] = useState("easystart");
  const [mainurl, setMainurl] = useState(easyStartUrl);

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

  //Check the answer and add recomendation
  const showAnswer = () => {
    if (state.question7 === "yes") {
      setRecommendation("plus");
      // setMainurl(plusUrl);
    } else {
      if (state.question5 === "yes" || state.question6 === "yes") {
        setRecommendation("essentials");
        // setMainurl(essentialsUrl);
      } else {
        setRecommendation("easystart");
        // setMainurl(easyStartUrl);
      }
    }
    if (
      state.question1 === "no" &&
      state.question2 === "no" &&
      state.question3 === "no" &&
      state.question4 === "no" &&
      state.question5 === "no" &&
      state.question6 === "no" &&
      state.question7 === "no"
    ) {
      setRecommendation("selfemployed");
      // setMainurl(selfemployedUrl);
    }
  };

  //Use Effect to check if added
  useEffect(() => {
    if (state.inputAdded === true) {
      transition(mode + 1);
      setState((prev) => ({
        ...prev,
        inputAdded: false
      }));

      if (mode === Ques.length) {
        showAnswer();
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
      return ReactDOM.createPortal(
        <>
          <Welcome />
          <button
            data-testid="welcomebutton"
            onClick={() => {
              transition(mode + 1);
            }}
          >
            Start Quiz
          </button>
        </>,
        quizElement
      );
    }
    //After Completion Show this
    else if (i === Ques.length + 1) {
      // window.location.href = mainurl;
      // window.location.assign(mainurl);
      // return null;
      return ReactDOM.createPortal(
        <>
          <DisplayAnswer recommendation={recommendation} />
          <button
            onClick={() => {
              //Hide Pricing Cards
              const pricingcards = document.getElementById("pricingCards");
              pricingcards.classList.toggle("pricingCardShow");
              pricingcards.classList.toggle("pricingCardHide");
              const elems = document.querySelectorAll(
                ".pricingCardRecommended"
              );
              [].forEach.call(elems, function (el) {
                el.classList.toggle("pricingCardRecommended");
              });
              //and remove Most Recommended
              const recommendedFlag = document.querySelectorAll(
                ".showRecommended"
              );
              [].forEach.call(recommendedFlag, function (el) {
                el.classList.toggle("showRecommended");
                el.classList.toggle("hideRecomemended");
              });
              // cardToHighlight.classList.remove("pricingCardRecommended");
              transition(mode - Ques.length);
              setState({
                question1: "",
                question2: "",
                question3: "",
                question4: "",
                question5: "",
                question6: "",
                question7: "",
                inputAdded: false
              });
            }}
          >
            Start Again
          </button>
        </>,
        quizElement
      );
    }
    //Quiz Steps
    return ReactDOM.createPortal(
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
      </>,
      quizElement
    );
  }
}

export default Quiz;
