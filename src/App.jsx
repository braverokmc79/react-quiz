import { useState } from 'react';

import Header from './components/Header.jsx';
import { log } from './log.js';
import Quiz from './components/Quiz.jsx';

function App() {
  log('<App /> rendered');

  const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    setChosenCount(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <>
      <Header />
      <main>
      
      <Quiz />
      
      </main>
    </>
  );
}

export default App;
