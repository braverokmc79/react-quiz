import React, { useCallback, useEffect, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const [timeout, setTimeout] = useState(1000*10);

  const  handleSelectAnswer =useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  }, []);


 const handleSkipAnswer= useCallback(() =>handleSelectAnswer(null), [handleSelectAnswer])


  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Complete!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort((a, b) => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">


        <h2>
         {(activeQuestionIndex+1)}.   {QUESTIONS[activeQuestionIndex].text} 
        </h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>

        <QuestionTimer  key={activeQuestionIndex} timeout={timeout}  onTimeout={()=>handleSkipAnswer()} />

      </div>
    </div>
  );
};

export default Quiz;
