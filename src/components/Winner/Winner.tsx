import React, { useContext } from "react";
import styles from "./Winner.module.scss";
import { GameContext } from "../../context/game-context";

const Winner: React.FC = (): JSX.Element => {
  const { level, setLevel, startGame } = useContext(GameContext);

  type TMessages = {
    header: string;
    body: string;
    ctx: string;
  };

  const messages: TMessages = {
    header: level < 0 ? "Welcome" : "You're a winner!",
    body:
      level < 0
        ? "<h2>Rules of Sudoku</h2><p>The rules of Sudoku are quite straightforward. The game consists of a grid of 9 squares. Each square contains a sub grid of 9 squares. The player wins the game when each sub grid, row and column contain the numbers 1…9 with no duplicates."
        : "This board is now completed. Amazing job! Give it a try for the next level</p>",
    ctx: level < 0 ? "Let's play Sudoku" : "Go to the next level",
  };

  return (
    <div className={styles.winner}>
      <h1>{messages.header}</h1>
      <p dangerouslySetInnerHTML={{ __html: messages.body }} />
      <button
        onClick={() => {
          if (level < 2) {
            setLevel(level + 1);
            startGame();
          }
        }}
      >
        {messages.ctx}
      </button>
    </div>
  );
};

export default Winner;
