import { useState } from 'react';
import Home from './home';
import Question from './question';
import End from './end';

function App() {
  const [currentDisplay, setCurrentDisplay] = useState('home');
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  return (
    <div>
      {currentDisplay === 'home' && (
        <Home
          setCurrentDisplay={setCurrentDisplay}
          setScore={setScore}
          setQuestions={setQuestions}
        />
      )}
      {currentDisplay === 'question' && (
        <Question
          setCurrentDisplay={setCurrentDisplay}
          score={score}
          setScore={setScore}
          questions={questions}
        />
      )}
      {currentDisplay === 'end' && (
        <End setCurrentDisplay={setCurrentDisplay} score={score} />
      )}
    </div>
  );
}

export default App;
