function ScoreCard({ score, currentQuestionNum, time }) {
  return (
    <div className="flex space-between">
      <div>
        <p>
          Question: <span>{currentQuestionNum}/10</span>
        </p>
      </div>
      <div>
        <p>
          Score: <span>{score || 0}</span>
        </p>
        <p>
          Time: <span>{time}</span>
        </p>
      </div>
    </div>
  );
}

export default ScoreCard;
