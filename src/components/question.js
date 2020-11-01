import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import ScoreCard from './scoreCard';
import shuffle from '../utils/shuffle';

function Question({
  setCurrentDisplay,
  score,
  setScore,
  questions,
  time,
  setTime,
}) {
  const [currentQuestionNum, setcurrentQuestionNum] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answerOptions, setAnswerOptions] = useState([]);

  const question = questions[currentQuestionNum - 1].question;

  useEffect(() => {
    const correctAnswer = questions[currentQuestionNum - 1].correct;
    const inCorrectAnswer = questions[currentQuestionNum - 1].incorrect;
    let shuffledAnswerOptions = [correctAnswer, ...inCorrectAnswer];
    if (currentQuestionNum <= 10) {
      shuffledAnswerOptions = shuffle(
        shuffledAnswerOptions,
        shuffledAnswerOptions.length
      );
      setAnswerOptions(shuffledAnswerOptions);
    }
    return () => {};
  }, [currentQuestionNum]);

  const onClick = (selectedAnswer) => {
    setIsSubmitted(true);
    if (selectedAnswer === questions[currentQuestionNum - 1].correct)
      setScore(score + 1);
    setTimeout(() => {
      if (currentQuestionNum === 10) setCurrentDisplay('end');
      else setcurrentQuestionNum(currentQuestionNum + 1);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div>
      <NavBar setCurrentDisplay={setCurrentDisplay} setTime={setTime} />
      <ScoreCard
        score={score}
        currentQuestionNum={currentQuestionNum}
        time={time}
      />
      <h2>{question}</h2>
      {answerOptions.map((option, idx) => {
        const isCorrect =
          option === questions[currentQuestionNum - 1].correct
            ? 'correct'
            : 'incorrect';
        return (
          <div className="flex center" key={idx}>
            <button
              type="button"
              className={isSubmitted ? isCorrect : ''}
              onClick={() => onClick(option)}
            >
              {option}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Question;
