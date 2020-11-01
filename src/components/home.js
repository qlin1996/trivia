import data from '../data.json';
import shuffle from '../utils/shuffle';

function Home({ setCurrentDisplay, setScore, setQuestions, timerOn }) {
  const onClick = () => {
    const shuffledQuestions = shuffle(data, 10);
    setQuestions(shuffledQuestions);
    setScore(0);
    setCurrentDisplay('question');
    timerOn(true);
  };

  return (
    <div>
      <h1>
        T<span>r</span>ivia
      </h1>
      <h2>Are you ready to win?</h2>
      <div className="flex center">
        <button type="button" onClick={onClick}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Home;
