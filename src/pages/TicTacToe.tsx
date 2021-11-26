import { Grid } from "../components/Grid/Grid";
import styles from "./TicTacToe.module.scss";
import { useState } from "react";

function TicTacToe() {
  const [cellValues, setCellValues] = useState<string[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [isWinner, setIsWinner] = useState(false);

  const onClickHandler = (index: number) => {
    if (cellValues[index] || isWinner) return;
    setCellValues((prev) => {
      const newArray = [...prev];
      newArray[index] = isXNext ? "X" : "O";
      if (checkIfWinner(newArray)) setIsWinner(true);
      return newArray;
    });
    setIsXNext((prev) => !prev);
    setMoveCount((prev) => prev + 1);
  };

  const checkIfWinner = (values: string[]) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (values[a] && values[a] === values[b] && values[a] === values[c]) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className={styles["game__container"]}>
      <h1>TicTacToe</h1>

      <div className={styles["game__messages"]}>
        {moveCount < 9 && !isWinner && <span>Next player: {isXNext ? "X" : "O"}</span>}
        {isWinner && <span>{isXNext ? "O" : "X"} wins</span>}
        {moveCount === 9 && !isWinner && <div>Draw</div>}
      </div>
      <Grid cells={cellValues} onClick={(index) => onClickHandler(index)} />
    </div>
  );
}

export default TicTacToe;
