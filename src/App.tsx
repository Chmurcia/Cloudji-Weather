import Main from "./components/Main";
import AddInfo from "./components/AddInfo";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMedium = useMediaQuery({ maxWidth: 1280 });

  return (
    <div className="flex flex-row font-mono h-full w-full ">
      {isMedium ? (
        ""
      ) : (
        <aside className="font-sans bg-gray-800 w-1/4 text-gray-300 ">
          <AddInfo />
        </aside>
      )}
      <Main />
    </div>
  );
}

export default App;
