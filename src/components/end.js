function End({ setcurrentDisplay, score }) {
  const onClick = () => {
    setcurrentDisplay('question');
  };
  return (
    <div className="flex-column">
      <h2>You got {score}/10 correct!</h2>
      <div className="flex-center">
        <button type="button" onClick={onClick}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default End;
