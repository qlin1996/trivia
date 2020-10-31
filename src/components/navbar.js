function NavBar({ setcurrentDisplay }) {
  return (
    <div>
      <div className="flex">
        <h2 className="logo" onClick={() => setcurrentDisplay('home')}>
          Trivia
        </h2>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;
