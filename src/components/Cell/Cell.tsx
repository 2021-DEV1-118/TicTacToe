type Props = {
  value: string | null;
  onClick: () => void;
};

export const Cell = (props: Props) => {
  return <button onClick={props.onClick}>{props.value}</button>;
};

Cell.defaultProps = {
  value: null,
  onClick: () => {},
};
