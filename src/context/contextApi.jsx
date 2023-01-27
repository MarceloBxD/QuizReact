import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const value = { correctAnswers, setCorrectAnswers };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
