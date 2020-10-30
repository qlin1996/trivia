import data from '../data';

function Home() {
  console.log(data[0]);
  return (
    <div>
      <h1>
        T<span>r</span>ivia
      </h1>
      <h2>Are you ready to win?</h2>
      <div className="flex-center">
        <a href="/">Start</a>
      </div>
    </div>
  );
}

export default Home;
