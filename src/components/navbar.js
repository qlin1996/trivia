function NavBar({ setCurrentDisplay, setTime }) {
  const onClick = () => {
    setCurrentDisplay('home');
    setTime(0);
  };

  return (
    <div>
      <div className="flex">
        <h2 className="logo" onClick={onClick}>
          Trivia
        </h2>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;
