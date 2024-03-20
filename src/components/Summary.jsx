import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

const Summary = ({ userAnswers }) => {

  const skippedAnswers=userAnswers.filter((answer)=>answer===null);
  const correctAnswers=userAnswers.filter((answer, index)=>answer===QUESTIONS[index].answers[0]);

  const skippedAnswersShare =Math.round((skippedAnswers.length/userAnswers.length)*100);
  const correctAnswersShare =Math.round((correctAnswers.length/userAnswers.length)*100);
  const wrongAnswersShare =100-skippedAnswersShare-correctAnswersShare;


  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="트로피 아이콘" />
      <h2>퀴즈 완료!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">정답</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">오답</span>
        </p>
      </div>

      <ol>
        {console.log(userAnswers)}
        { userAnswers && userAnswers.map((answer, index) => {
           
          let cssClass='user-answer';
          if(answer===null){
            cssClass +=' skipped';
          }else if(answer===QUESTIONS[index].answers[0]){
            cssClass +=' correct';
          }else{
            cssClass +=' wrong';
          }

          return (        
            <li key={index+answer}>
              <h3>{index+1}</h3>
               <p className="question">{QUESTIONS[index].text}</p> 
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })
        } 

      </ol>
    </div>
  );
};

export default Summary;
