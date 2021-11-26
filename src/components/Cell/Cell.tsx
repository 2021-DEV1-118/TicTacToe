import styles from "./Cell.module.scss";

type Props = {
  value: string | null;
  testId: string | null;
  onClick: () => void;
};

export const Cell = (props: Props) => {
  return (
    <button
      className={`${styles["cell"]} ${styles[`cell--${props.value}`]}`}
      onClick={props.onClick}
      data-testid={props.testId}>
      {props.value}
    </button>
  );
};

Cell.defaultProps = {
  value: null,
  testId: null,
  onClick: () => {},
};
