import { useMediaQuery } from "react-responsive";

type AddInfoProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  overflow: boolean;
};

export const AddInfoTable = ({
  title,
  icon,
  children,
  overflow,
}: AddInfoProps) => {
  const isEnough = useMediaQuery({ maxWidth: 1720 });
  const classes = overflow
    ? `p-6 w-3/4  font-normal rounded-lg py-6 bg-gray-700 max-h-60 overflow-auto ${isEnough && "text-sm"}`
    : `p-6 w-3/4  flex flex-col gap-2  font-normal rounded-lg py-6 bg-gray-700 ${isEnough && "text-sm"}`;
  return (
    <div className="w-full flex  justify-center mb-6">
      <p className=" font-semibold flex rounded-lg gap-2 justify-center items-center tracking-wider translate-y-[-14px] px-3 bg-gray-800 text-xl absolute ">
        {icon} {title}
      </p>
      <div className={classes}>{children}</div>
    </div>
  );
};
