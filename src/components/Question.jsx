import React, { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTION from "../questions.js";

const Question = ({
  keyNum,
  onSelectAnswer,
  onSkipAnswer,
}) => {

  const [answer, setAnswer]=useState({
      selectedAnswer:'',
      isCorrect:null
  });


  let timer=1000*30;
  if(answer.selectedAnswer){//선택 되었다면 정답이나 오답을 보여 줘야하기때문에 1초로 변경 처리
    timer=1000;
  }


  if(answer.isCorrect !==null){
    timer=2000;
  }



  function handleSelectAnswer(answer){
    setAnswer({
      selectedAnswer:answer,
      isCorrect:null
    });

    setTimeout(() => {      
      setAnswer({
        selectedAnswer:answer,
        isCorrect:QUESTION[keyNum].answers[0] ===answer
      })

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }


  let answerState ='';
  if(answer.selectedAnswer && answer.isCorrect!==null){
    answerState=answer.isCorrect ? 'correct' :'wrong';
  }




  return (
    <div id="question">
      <h2>
        {keyNum+1}. {QUESTION[keyNum].text}
      </h2>

      <Answers      
        answers={QUESTION[keyNum].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />

      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer ===''? onSkipAnswer :null}
        mode={answerState}
      />
    </div>
  );
};

export default Question;
