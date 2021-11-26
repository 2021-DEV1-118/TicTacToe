import { Cell } from "../Cell/Cell";
import styles from "./Grid.module.scss";

type Props = {
  cells: string[];
  onClick: (index: number) => void;
};

export const Grid = (props: Props) => {
  const renderCell = (index: number) => {
    return (
      <Cell
        value={props.cells[index]}
        onClick={() => props.onClick(index)}
        testId={`cell-${index}`}
      />
    );
  };

  return (
    <div className={styles["grid__container"]}>
      <div className={styles["grid__row"]}>
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className={styles["grid__row"]}>
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className={styles["grid__row"]}>
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
};

Grid.defaultProps = {
  cells: [],
  onClick: () => {},
};
