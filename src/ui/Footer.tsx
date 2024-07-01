import { NextDay } from "./NextDay";

type FooterProps = { className: string; array: [] };

export const Footer = ({ className, array }: FooterProps) => {
  const SevenDays = array?.slice(0, 7);

  return (
    <div className={className}>
      {SevenDays?.map(
        (next: {
          temp: string;
          conditions: string;
          icon: string;
          datetime: string;
        }) => {
          return (
            <NextDay
              temp={next.temp}
              icon={next.icon}
              condition={next.conditions}
              datetime={next.datetime}
              key={next.datetime}
              className="flex flex-col hover:bg-gray-700 transition-color duration-300 text-center justify-center items-center flex-auto w-48 h-48 "
            />
          );
        }
      )}
    </div>
  );
};
