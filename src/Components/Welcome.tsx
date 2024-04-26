const Welcome: React.FC<{
  questions: any;
  dispatch: React.Dispatch<{
    type: string;
    payload?: any;
  }>;
}> = ({ questions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to our quiz challenge.</h2>
      <h3>You need to answer {questions.length} questions.</h3>
      <button className="btn" onClick={() => dispatch({type: "start"})}>Lets start</button>
    </div>
  );
};

export default Welcome;
