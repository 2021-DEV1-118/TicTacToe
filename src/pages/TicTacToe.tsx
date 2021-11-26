import { Grid } from "../components/Grid/Grid";
import styles from "./TicTacToe.module.scss";
import { useState } from "react";

function TicTacToe() {
  const [cellValues, setCellValues] = useState<string[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const onClickHandler = (index: number) => {
    setCellValues((prev) => {
      const newArray = [...prev];
      newArray[index] = isXNext ? "X" : "O";
      return newArray;
    });
    setIsXNext((prev) => !prev);
  };

  return (
    <div className={styles["container"]}>
      <h1>TicTacToe</h1>
      <Grid cells={cellValues} onClick={(index) => onClickHandler(index)} />
    </div>
  );
}

export default TicTacToe;
