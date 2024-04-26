const Options: React.FC<{
  options: string[];
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
  answer: number | null;
  currAnswer: number;
}> = ({ options, dispatch, answer, currAnswer }) => {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {options.map((op: string, i: number) => (
        <button
          className={`btn btn-option ${
            hasAnswered ? (i === currAnswer ? "correct" : "wrong") : ""
          } ${i === answer ? "answer" : ""}`}
          key={i}
          onClick={() => dispatch({ type: "hasAnswered", payload: i })}
          disabled={hasAnswered}
        >
          {op}
        </button>
      ))}
    </div>
  );
};

export default Options;
