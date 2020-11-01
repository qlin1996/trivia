import { useState, useEffect } from 'react';
import NavBar from './navbar';
import { timeConverterSentences } from '../utils/timeConverter';

function End({ setCurrentDisplay, score, time, timerOn, setTime }) {
  const [bestScore, setBestScore] = useState(0);

  const onClick = () => {
    setCurrentDisplay('home');
    setTime(0);
  };

  useEffect(() => {
    timerOn(false);
    const oldBest = localStorage.getItem('best');
    if (!oldBest || score > oldBest) {
      localStorage.setItem('best', score);
      setBestScore(score);
    } else {
      setBestScore(oldBest);
    }
  }, [score]);

  return (
    <div>
      <NavBar setCurrentDisplay={setCurrentDisplay} />
      <div className="flex column">
        <h2>
          You got {score}/10 correct in {timeConverterSentences(time)}!
        </h2>
        <h2>Your all time best: {bestScore}/10</h2>
        <div className="flex center">
          <button type="button" onClick={onClick}>
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default End;
