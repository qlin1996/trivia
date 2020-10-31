import data from '../data.json';

function Home({ setcurrentDisplay, shuffle }) {
  const onClick = () => {
    shuffle(data);
    setcurrentDisplay('question');
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
