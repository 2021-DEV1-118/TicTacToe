import { GRID_CELLS, WINCONDITIONS } from "../helpers/Constants";

import { Grid } from "../components/Grid/Grid";
import { Player } from "../helpers/Enums";
import styles from "./TicTacToe.module.scss";
import { useState } from "react";

const TicTacToe = () => {
  const [cellValues, setCellValues] = useState<string[]>(Array(GRID_CELLS).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [isWinner, setIsWinner] = useState<boolean>(false);

  const onClickHandler = (index: number) => {
    if (cellValues[index] || isWinner) return;
    setCellValues((prev) => {
      const newArray = [...prev];
      newArray[index] = isXNext ? Player.X : Player.O;
      if (checkIfWinner(newArray)) setIsWinner(true);
      return newArray;
    });
    setIsXNext((prev) => !prev);
    setMoveCount((prev) => prev + 1);
  };

  const checkIfWinner = (values: string[]) => {
    for (let i = 0; i < WINCONDITIONS.length; i++) {
      const [a, b, c] = WINCONDITIONS[i];
      if (values[a] && values[a] === values[b] && values[a] === values[c]) {
        return true;
      }
    }
    return false;
  };

  const playAgainHandler = () => {
    setCellValues(Array(GRID_CELLS).fill(null));
    setIsXNext(true);
    setMoveCount(0);
    setIsWinner(false);
  };

  return (
    <div className={styles["game__container"]}>
      <h1>TicTacToe</h1>

      <div className={styles["game__messages"]}>
        {moveCount < GRID_CELLS && !isWinner && (
          <span>Next player: {isXNext ? Player.X : Player.O}</span>
        )}
        {isWinner && <span>{isXNext ? Player.O : Player.X} wins</span>}
        {moveCount === GRID_CELLS && !isWinner && <div>Draw</div>}
      </div>

      <Grid cells={cellValues} onClick={(index) => onClickHandler(index)} />

      {(isWinner || moveCount === GRID_CELLS) && (
        <div className={styles["game__actions"]}>
          <button
            className={styles["game__actions-button"]}
            onClick={playAgainHandler}
            data-testid='btn-play-again'>
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
