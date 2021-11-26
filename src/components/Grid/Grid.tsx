import { Cell } from "../Cell/Cell";
import styles from "./Grid.module.scss";

export const Grid = () => {
  return (
    <div className={styles["grid__container"]}>
      <div className={styles["grid__row"]}>
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className={styles["grid__row"]}>
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className={styles["grid__row"]}>
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};
