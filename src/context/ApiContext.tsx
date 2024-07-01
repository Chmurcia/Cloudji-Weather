import axios from "axios";
import { createContext, useContext, useState } from "react";
import { BASE_URL, KEY } from "../config";
import toast from "react-hot-toast";

type currentConditionsProps = {
  icon: string;
  temp: string;
  conditions: string;
  windspeed: number;
  winddir: number;
  sunrise: string;
  sunset: string;
  pressure: number;
  humidity: number;
  cloudcover: number;
};

type WeatherData = {
  currentConditions: currentConditionsProps;
  address: string;
  days: [];
  timezone: string;
  alerts: [];
};

type WeatherContextType = {
  data: WeatherData | null;
  isLoading: boolean;
  error: string | null;
  fetchData: (city: string) => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = (city: string): void => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}${city}?unitGroup=metric&key=${KEY}&contentType=json`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        toast.success("City fetched successfully");
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
        toast.error("Error fetching data. Is provided data correct?");
      });
  };

  return (
    <WeatherContext.Provider value={{ data, isLoading, error, fetchData }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error("useWeatherContext must be used within a WeatherProvider");

  return context;
};
export default useWeatherContext;
export { WeatherProvider, WeatherContext };
