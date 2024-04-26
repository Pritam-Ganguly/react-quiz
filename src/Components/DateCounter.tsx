import { ChangeEvent, useReducer } from "react";

interface IInitalState {
  count: number;
  step: number;
}

const initalState: IInitalState = { count: 0, step: 1 };

function reducer(
  state: IInitalState,
  action: { type: string; payload?: any }
): IInitalState {
  console.log(state, action);
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "defineCount":
      return { ...state, count: action.payload };
    case "defineStep":
      return { ...state, step: action.payload };
    case "reset":
      return initalState;
    default:
      throw new Error("Invalid operation.");
  }
}

function DateCounter() {
  // const [count, setCount] = useState<number>(0);
  // const [step, setStep] = useState<number>(1);

  const [state, dispatch] = useReducer(reducer, initalState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    // setCount(Number(e.currentTarget.value));
    dispatch({ type: "defineCount", payload: Number(e.currentTarget.value) });
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    // setStep(Number(e.currentTarget.value));
    dispatch({ type: "defineStep", payload: Number(e.currentTarget.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
