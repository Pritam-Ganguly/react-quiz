const Finished: React.FC<{
  points: number;
  totalPoints: number;
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
  highScore: number;
}> = ({ points, totalPoints, dispatch, highScore }) => {
  const percentage = (points / totalPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage < 100 && percentage > 70) emoji = "🥈";
  else if (percentage < 70 && percentage > 50) emoji = "🥉";
  else emoji = "❌";
  return (
    <div>
      <div className="result">
        {emoji} You scored <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(percentage)}%)
      </div>
      <h3>Current High Score - {highScore}</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "retry" })}
      >
        Restart quiz
      </button>
    </div>
  );
};

export default Finished;
