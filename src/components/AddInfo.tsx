import { useState } from "react";

import Alerts from "./Alerts";

import useWeatherContext from "../context/ApiContext";
import { Input } from "../ui/Input";
import { AddInfoTable } from "../ui/AddInfoTable";
import { calculateWindDir } from "../services/calculateWindDir";
import { IoWarning } from "react-icons/io5";
import { FaCloud, FaMountainCity, FaSun } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";
import { AddInfoTableEl } from "../ui/AddInfoTableEl";
import Spinner from "../ui/Spinner";

const AddInfo = () => {
  const { fetchData, data, isLoading } = useWeatherContext();

  const [input, setInput] = useState<string>("");

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchData(input);
      setInput("");
      e.preventDefault();
    } else if (e.key === "Escape") {
      setInput("");
    }
  };

  return (
    <>
      <div className="w-full flex justify-center relative">
        <Input
          input={input}
          setInput={setInput}
          className="w-3/4 absolute top-0 p-2 h-12  tracking-wide border-b-[1px] focus:h-16 transition-all  text-xl border-gray-400 outline-none bg-transparent"
          placeholder="Enter a city"
          onKey={handleKey}
        />
      </div>
      <div className="h-full flex flex-col justify-center items-center pt-28 ">
        <div className="flex w-full flex-col justify-center items-center">
          {isLoading ? (
            <Spinner />
          ) : (
            data && (
              <>
                <AddInfoTable
                  overflow={false}
                  icon={<FaMountainCity />}
                  title={`${data.address}`}
                >
                  <AddInfoTableEl
                    title="Temperature"
                    value={`${data.currentConditions.temp}°C`}
                  />

                  <AddInfoTableEl
                    title="Time Zone"
                    value={`${data.timezone}`}
                  />
                </AddInfoTable>
                <AddInfoTable overflow={false} icon={<FiWind />} title="Wind">
                  <AddInfoTableEl
                    title="Speed"
                    value={`${data.currentConditions.windspeed} km/h`}
                  />
                  <AddInfoTableEl
                    title="Direction"
                    value={`${calculateWindDir(data.currentConditions.winddir)}`}
                  />
                </AddInfoTable>
                <AddInfoTable overflow={false} icon={<FaSun />} title="Sun">
                  <AddInfoTableEl
                    title="Sunrise"
                    value={`${data.currentConditions.sunrise}`}
                  />
                  <AddInfoTableEl
                    title="Sunset"
                    value={`${data.currentConditions.sunset}`}
                  />
                </AddInfoTable>
                <AddInfoTable
                  overflow={false}
                  icon={<FaCloud />}
                  title="Conditions"
                >
                  <AddInfoTableEl
                    title="Pressure"
                    value={`${data.currentConditions.pressure} hPa`}
                  />
                  <AddInfoTableEl
                    title="Humidity"
                    value={`${data.currentConditions.humidity}%`}
                  />
                  <AddInfoTableEl
                    title="Cloudcover"
                    value={`${data.currentConditions.cloudcover}%`}
                  />
                </AddInfoTable>
                <AddInfoTable
                  overflow={true}
                  icon={<IoWarning />}
                  title="Alerts"
                >
                  <Alerts alerts={data.alerts} />
                </AddInfoTable>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default AddInfo;
