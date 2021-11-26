import { Grid } from "../components/Grid/Grid";
import styles from "./TicTacToe.module.scss";

function TicTacToe() {
  return (
    <div className={styles["container"]}>
      <h1>TicTacToe</h1>
      <Grid />
    </div>
  );
}

export default TicTacToe;
