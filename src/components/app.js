import { useState } from 'react';
import Home from './home';
import Question from './question';
import End from './end';

function App() {
  const [currentDisplay, setCurrentDisplay] = useState('home');
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [time, setTime] = useState(0);
  const [timerFunc, setTimerFunc] = useState('');

  const timerOn = (boo) => {
    if (boo) setTimerFunc(setInterval(() => setTime((time) => time + 1), 1000));
    else clearInterval(timerFunc);
  };

  return (
    <div>
      {currentDisplay === 'home' && (
        <Home
          setCurrentDisplay={setCurrentDisplay}
          setScore={setScore}
          setQuestions={setQuestions}
          timerOn={timerOn}
        />
      )}
      {currentDisplay === 'question' && (
        <Question
          setCurrentDisplay={setCurrentDisplay}
          score={score}
          setScore={setScore}
          questions={questions}
          time={time}
          setTime={setTime}
        />
      )}
      {currentDisplay === 'end' && (
        <End
          setCurrentDisplay={setCurrentDisplay}
          score={score}
          time={time}
          timerOn={timerOn}
          setTime={setTime}
        />
      )}
    </div>
  );
}

export default App;
