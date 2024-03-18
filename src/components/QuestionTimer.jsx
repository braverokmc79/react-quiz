import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const time=setTimeout(onTimeout, timeout);
    return ()=>{clearTimeout(time)};
  }, [onTimeout, timeout]);


  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {              
        return prevRemainingTime - 100;
      });
    }, 100);

    return (()=>{
        clearInterval(interval);
    });   

  }, [timeout, onTimeout]);



  return <progress value={remainingTime} max={timeout} id="question-time" />;
};

export default QuestionTimer;
