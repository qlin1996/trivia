import data from '../data';
import { useState, useEffect } from 'react';

function Question({ setcurrentDisplay, shuffle, score, setScore }) {
  const [currentQuestionNum, setcurrentQuestionNum] = useState(0);

  const question = data[currentQuestionNum].question;
  const correctAnswer = data[currentQuestionNum].correct;
  const inCorrectAnswer = data[currentQuestionNum].incorrect;
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
      <h2>{question}</h2>
      {answerOptions.map((option, idx) => (
        <div className="flex-center">
          <button type="button" key={idx} onClick={() => onClick(option)}>
            {option}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Question;
