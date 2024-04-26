const Progress: React.FC<{
  index: number;
  numOfQuestion: number;
  points: number;
  totalPoints: number;
  answer: number | null;
}> = ({ index, numOfQuestion, points, totalPoints, answer }) => {
  return (
    <header className="progress">
      <progress
        max={numOfQuestion}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        QuestionNumber <strong>{index}</strong>/{numOfQuestion}
      </p>

      <p>
        Points: <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
};

export default Progress;
