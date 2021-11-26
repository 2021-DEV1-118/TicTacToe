import styles from "./Cell.module.scss";

type Props = {
  value: string | null;
  onClick: () => void;
};

export const Cell = (props: Props) => {
  return (
    <button className={styles["cell"]} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

Cell.defaultProps = {
  value: null,
  onClick: () => {},
};
