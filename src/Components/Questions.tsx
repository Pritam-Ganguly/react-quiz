import Options from "./Options";

const Questions: React.FC<{
  question: any;
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
  answer: number | null;
}> = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h4>{question.question} </h4>
      <Options
        options={question.options}
        dispatch={dispatch}
        answer={answer}
        currAnswer={question.correctOption}
      />
    </div>
  );
};

export default Questions;
