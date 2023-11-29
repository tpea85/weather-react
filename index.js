import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <p>Weather App</p>
    <Search city="New York" />
  </StrictMode>,
);
