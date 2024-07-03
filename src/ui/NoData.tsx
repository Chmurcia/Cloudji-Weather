import { TbWorldSearch } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";

export const NoData = () => {
  const isMedium = useMediaQuery({ maxWidth: 1280 });
  return (
    <>
      <TbWorldSearch size={300} />
      <div className="px-4 text-center">
        {isMedium
          ? "Try to check current weather by clicking the little icon in top right corner and typing your city!"
          : "Try to check current weather by clicking the input in the top left corner and typing your city!"}
      </div>
    </>
  );
};
