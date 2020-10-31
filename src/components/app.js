import { useState } from 'react';
import Home from './home';
import Question from './question';
import End from './end';

function App() {
  const [currentDisplay, setcurrentDisplay] = useState('home');
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
          setcurrentDisplay={setcurrentDisplay}
          shuffle={shuffle}
          setScore={setScore}
          setQuestions={setQuestions}
        />
      )}
      {currentDisplay === 'question' && (
        <Question
          setcurrentDisplay={setcurrentDisplay}
          shuffle={shuffle}
          score={score}
          setScore={setScore}
          questions={questions}
        />
      )}
      {currentDisplay === 'end' && (
        <End setcurrentDisplay={setcurrentDisplay} score={score} />
      )}
    </div>
  );
}

export default App;
