import { FC, SyntheticEvent, useState } from "react";
import "./Guess.scss";

export const Guess: FC = () => {
  const [results, setResults] = useState<string>();
  const [answer, setAnswer] = useState<number>(
    parseInt(Math.random() * (100 - 1) + 1)
  );
  const [numGuesses, setNumGuesses] = useState<number>(1);
  const [inProgress, setInProgress] = useState<boolean>(true);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setNumGuesses(numGuesses + 1);
    const target = e.target as typeof e.target & {
      guess: { value: string };
    };

    const value = parseInt(target.guess.value);

    if (value === answer) {
      setResults(`You won in ${numGuesses} guesses!`);
      setInProgress(false);
    }

    if (value > answer) setResults("Too high");
    if (value < answer) setResults("Too Low");
  };

  const playAgain = () => {
    setAnswer(parseInt(Math.random() * (100 - 1) + 1));
    setNumGuesses(1);
    setResults("");
    setInProgress(true);
  };
  return (
    <div className="Guess">
      {inProgress ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="Guess a Number between 1 and 100">
            Guess a Number between 1 and 100
          </label>
          <input type="number" name="guess" />
          <button className="btn-lg">Submit</button>
        </form>
      ) : (
        <button className="btn-lg" onClick={playAgain}>
          Play Again
        </button>
      )}

      <div className="results">{results}</div>
    </div>
  );
};
