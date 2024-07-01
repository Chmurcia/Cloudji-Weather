import { useEffect, useState } from "react";
import { Footer } from "../ui/Footer";

import { MainContent } from "../ui/MainContent";
import useWeatherContext from "../context/ApiContext";
import { ConditionIcon } from "../ui/ConditionIcon";
import { useMediaQuery } from "react-responsive";

import { Button } from "../ui/Button";
import { IoMenu } from "react-icons/io5";
import AddInfo from "./AddInfo";
import { NoData } from "../ui/NoData";

const Main = () => {
  const { data } = useWeatherContext();

  const [showAddData, setShowAddData] = useState<boolean>(false);
  useEffect(() => {
    setShowAddData(false);
  }, [data]);
  const isMedium = useMediaQuery({ maxWidth: 1280 });
  const isSmall = useMediaQuery({ maxWidth: 720 });
  const isReallySmall = useMediaQuery({ maxWidth: 450 });

  useEffect(() => {
    if (!isMedium) setShowAddData(false);
  }, [isMedium]);

  return (
    <main className="text-gray-300 flex flex-col justify-center items-center w-full h-full bg-gray-900 ">
      <div
        className={`absolute w-full h-full bg-gray-800 transition-transform duration-700 ${showAddData ? "" : "translate-y-[-9999px]"}`}
      >
        <AddInfo />
      </div>
      {isMedium && (
        <Button
          className="absolute z-10 top-0 right-0"
          event={() => {
            setShowAddData((show) => !show);
          }}
        >
          <IoMenu size={50} />
        </Button>
      )}
      {!data ? (
        <NoData />
      ) : (
        <>
          <MainContent className="md:max-h-3/4 font-semibold flex flex-col sm:gap-2 md:gap-4 gap-8 justify-center h-full items-center">
            <p className="text-4xl md:text-5xl lg:text-7xl font-semibold bg-gray-900 p-10">
              {data?.address} {data?.currentConditions.temp}°C
            </p>
            <ConditionIcon
              width={isMedium ? (isSmall ? "200rem" : "300rem") : "450rem"}
              condition={data?.currentConditions.icon}
            />
            <p className=" text-2xl lg:text-5xl">
              {data?.currentConditions.conditions}
            </p>
          </MainContent>

          <Footer
            array={data?.days}
            className={`h-1/3 place-items-center overflow-y-scroll text-center grid  ${isReallySmall ? "grid-cols-2" : "grid-cols-3"} sm:grid-cols-4 md:grid-cols-7`}
          />
        </>
      )}
    </main>
  );
};

export default Main;
