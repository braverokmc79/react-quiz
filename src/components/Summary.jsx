import quizCompleteImg from "../assets/quiz-complete.png";
import Question from './Question';


const Summary = () => {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Complete!</h2>
      <div id="summary-stats">
        <p>
            <span className="number">10%</span>
            <span className="text">skipped</span>
        </p>
        <p>
            <span className="number">10%</span>
            <span className="text">정답</span>
        </p>
        <p>
            <span className="number">10%</span>
            <span className="text">오답</span>
        </p>

      <ol>
        <li> 
            <h3>2</h3>
            <p className="question">Question text</p>
            <p className="user-answer">user's answer</p>           
        </li>
      </ol>

    
      </div>
    </div>
  );
};

export default Summary;
