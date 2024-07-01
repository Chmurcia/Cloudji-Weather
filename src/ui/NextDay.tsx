type NextDayProps = {
  temp: string;
  icon: string;
  condition: string;
  datetime: string;
  className: string;
};

import { ConditionIcon } from "./ConditionIcon";

export const NextDay = ({
  temp,
  icon,
  condition,
  datetime,
  className,
}: NextDayProps) => {
  return (
    <div className={className}>
      <p className="bg-gray-950 px-2 rounded-full">{datetime}</p>
      <p>{temp}°C</p>
      <ConditionIcon condition={icon} width="100rem" />
      <p>{condition}</p>
    </div>
  );
};
