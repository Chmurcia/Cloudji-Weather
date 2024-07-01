import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { WeatherProvider } from "./context/ApiContext.tsx";

import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WeatherProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
