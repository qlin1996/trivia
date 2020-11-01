import { useState } from 'react';
import Home from './home';
import Question from './question';
import End from './end';

function App() {
  const [currentDisplay, setCurrentDisplay] = useState('home');
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  const shuffle = (arr, n) => {
    let numsArr = [];
    let shuffledArr = [];
    while (numsArr.length < n) {
      let randomNum = Math.floor(Math.random() * n);
      if (!numsArr.includes(randomNum)) {
        numsArr.push(randomNum);
        shuffledArr.push(arr[randomNum]);
      }
    }
    return shuffledArr;
  };

  return (
    <div>
      {currentDisplay === 'home' && (
        <Home
          setCurrentDisplay={setCurrentDisplay}
          shuffle={shuffle}
          setScore={setScore}
          setQuestions={setQuestions}
        />
      )}
      {currentDisplay === 'question' && (
        <Question
          setCurrentDisplay={setCurrentDisplay}
          shuffle={shuffle}
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
