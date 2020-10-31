import { useState } from 'react';
import Home from './home';
import Question from './question';

function App() {
  const [currentDisplay, setcurrentDisplay] = useState('home');
  const [currentQuestionNum, setcurrentQuestionNum] = useState(0);

  const shuffle = (arr) => {
    let m = arr.length;
    while (m) {
      let i = Math.floor(Math.random() * m--);
      [arr[i], arr[m]] = [arr[m], arr[i]];
    }
    return arr;
  };

  return (
    <div>
      {currentDisplay === 'home' && (
        <Home setcurrentDisplay={setcurrentDisplay} shuffle={shuffle} />
      )}
      {currentDisplay === 'question' && (
        <Question
          currentQuestionNum={currentQuestionNum}
          setcurrentQuestionNum={setcurrentQuestionNum}
          setcurrentDisplay={setcurrentDisplay}
          shuffle={shuffle}
        />
      )}
    </div>
  );
}

export default App;
