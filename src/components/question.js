import data from '../data';
import { useState, useEffect } from 'react';
import NavBar from './navbar';
import ScoreCard from './scoreCard';

function Question({ setcurrentDisplay, shuffle, score, setScore }) {
  const [currentQuestionNum, setcurrentQuestionNum] = useState(1);
  console.log('score', score);

  const question = data[currentQuestionNum - 1].question;
  const correctAnswer = data[currentQuestionNum - 1].correct;
  const inCorrectAnswer = data[currentQuestionNum - 1].incorrect;
  const answerOptions = [correctAnswer, ...inCorrectAnswer];

  useEffect(() => {
    shuffle(answerOptions);
  });

  const onClick = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) setScore(score + 1);
    if (currentQuestionNum === 10) setcurrentDisplay('end');
    else setcurrentQuestionNum(currentQuestionNum + 1);
  };
  return (
    <div>
      <NavBar />
      <ScoreCard score={score} currentQuestionNum={currentQuestionNum} />
      <h2>{question}</h2>
      {answerOptions.map((option, idx) => (
        <div className="flex center">
          <button type="button" key={idx} onClick={() => onClick(option)}>
            {option}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Question;
