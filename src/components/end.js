import { useEffect } from 'react';
import NavBar from './navbar';
import { timeConverterSentences } from '../utils/timeConverter';

function End({ setCurrentDisplay, score, time, timerOn, setTime }) {
  const onClick = () => {
    setCurrentDisplay('home');
    setTime(0);
  };

  useEffect(() => {
    timerOn(false);
  });

  return (
    <div>
      <NavBar setCurrentDisplay={setCurrentDisplay} />
      <div className="flex column">
        {
          <h2>
            You got {score}/10 correct in {timeConverterSentences(time)}!
          </h2>
        }
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
