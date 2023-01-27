import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "./context/contextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
);
