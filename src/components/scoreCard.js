function ScoreCard({ score, currentQuestionNum }) {
  return (
    <div className="flex space-between">
      <div>
        <p>
          Question: <span>{currentQuestionNum}/10</span>
        </p>
      </div>
      <div>
        <p>
          # of Correct Answers: <span>{score || 0}</span>
        </p>
      </div>
    </div>
  );
}

export default ScoreCard;
