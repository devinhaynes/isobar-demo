import { FC, SyntheticEvent, useState } from "react";
import "./Guess.scss";

export const Guess: FC = () => {
  const createAnswer = () => Math.floor(Math.random() * (100 - 1) + 1);

  const [results, setResults] = useState<"Success" | "Fail" | null>();
  const [resultsMessage, setResultsMessage] = useState<string>();
  const [answer, setAnswer] = useState<number>(createAnswer());
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
      setResults("Success");
      setResultsMessage(`You won in ${numGuesses} guesses!`);
      setInProgress(false);
    }

    if (value > answer) {
      setResults("Fail");
      setResultsMessage("Too high");
    }
    if (value < answer) {
      setResults("Fail");
      setResultsMessage("Too low");
    }
  };

  const playAgain = () => {
    setAnswer(createAnswer());
    setNumGuesses(1);
    setResults(null);
    setResultsMessage("");
    setInProgress(true);
  };
  return (
    <div className="Guess">
      <div data-status={results} className="results">
        {resultsMessage}
      </div>
      <div className="Guess__wrapper">
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
      </div>
    </div>
  );
};
