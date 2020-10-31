function ScoreCard({ score, currentQuestionNum }) {
  return (
    <div className="flex space-between">
      <div>
        <p>Question: {currentQuestionNum}/10</p>
      </div>
      <div>
        <p>Points: {score || 0}</p>
      </div>
    </div>
  );
}

export default ScoreCard;
