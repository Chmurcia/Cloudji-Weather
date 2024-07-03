type ConditionIconProps = { condition: string; width: string };

export const ConditionIcon = ({ condition, width }: ConditionIconProps) => {
  return <img width={width} src={`../../${condition}.svg`} />;
};
