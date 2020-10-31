import { useState, useEffect } from 'react';
import NavBar from './navbar';
import ScoreCard from './scoreCard';

function Question({ setcurrentDisplay, shuffle, score, setScore, questions }) {
  const [currentQuestionNum, setcurrentQuestionNum] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answerOptions, setAnswerOptions] = useState([]);

  const question = questions[currentQuestionNum - 1].question;
  console.log(questions[currentQuestionNum - 1]);

  useEffect(() => {
    const correctAnswer = questions[currentQuestionNum - 1].correct;
    const inCorrectAnswer = questions[currentQuestionNum - 1].incorrect;
    let answerOptions = [correctAnswer, ...inCorrectAnswer];
    if (currentQuestionNum <= 10) {
      answerOptions = shuffle(answerOptions, answerOptions.length);
      setAnswerOptions(answerOptions);
    }
  }, [currentQuestionNum]);

  const onClick = (selectedAnswer) => {
    setIsSubmitted(true);
    if (selectedAnswer === questions[currentQuestionNum - 1].correct)
      setScore(score + 1);
    setTimeout(() => {
      if (currentQuestionNum === 10) setcurrentDisplay('end');
      else setcurrentQuestionNum(currentQuestionNum + 1);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div>
      <NavBar setcurrentDisplay={setcurrentDisplay} />
      <ScoreCard score={score} currentQuestionNum={currentQuestionNum} />
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
