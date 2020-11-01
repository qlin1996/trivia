function NavBar({ setCurrentDisplay }) {
  return (
    <div>
      <div className="flex">
        <h2 className="logo" onClick={() => setCurrentDisplay('home')}>
          Trivia
        </h2>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;
