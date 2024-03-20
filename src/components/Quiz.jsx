import React, { useCallback, useEffect, useRef, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  //답변 선택
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
    },
    []
  );


  //선택을 안했을 경우 건너띄기
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary   userAnswers={userAnswers}  />
    );
  }




  return (
    <div id="quiz">
      <Question  
        key={activeQuestionIndex}
        keyNum={activeQuestionIndex}

        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}

        />
    </div>
  );
};

export default Quiz;
