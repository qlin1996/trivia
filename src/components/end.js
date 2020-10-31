import NavBar from './navbar';

function End({ setcurrentDisplay, score }) {
  const onClick = () => {
    setcurrentDisplay('home');
  };
  return (
    <div>
      <NavBar />
      <div className="flex column">
        <h2>You got {score}/10 correct!</h2>
        <div className="flex center">
          <button type="button" onClick={onClick}>
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default End;
