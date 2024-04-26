import { useEffect } from "react";

const Timer: React.FC<{
  secondsRemaining: number;
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
}> = ({ secondsRemaining, dispatch }) => {
  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const min = Math.floor(secondsRemaining / 60);
  const sec = Math.floor(secondsRemaining % 60);
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
};

export default Timer;
