const NextQuestion: React.FC<{
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
  answer: number | null;
  index: number;
  numOfQuestion: number;
}> = ({ dispatch, answer, index, numOfQuestion }) => {
  const hasAnswered = answer !== null;
  const isLastQuestion = index === numOfQuestion - 1;
  return (
    <>
      {isLastQuestion ? (
        <>
          {hasAnswered && (
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "hasFinished" })}
            >
              Finish
            </button>
          )}
        </>
      ) : (
        <>
          {hasAnswered && (
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "nextQuestion" })}
            >
              Next
            </button>
          )}
        </>
      )}
    </>
  );
};

export default NextQuestion;
