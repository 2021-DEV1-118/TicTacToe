import styles from "./Cell.module.scss";

type Props = {
  value: string | null;
  testId: string | null;
  onClick: () => void;
};

export const Cell = (props: Props) => {
  return (
    <button className={styles["cell"]} onClick={props.onClick} data-testid={"TESTID-TODO"}>
      {props.value}
    </button>
  );
};

Cell.defaultProps = {
  value: null,
  testId: null,
  onClick: () => {},
};
