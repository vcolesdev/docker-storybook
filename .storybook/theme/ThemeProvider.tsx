import React from "react";

import useThemeProvider from "../hooks/useThemeProvider";
import { ThemeContext } from "./ThemeContext";

/**
 * ThemeProvider
 * @param children
 * @constructor
 */
export default function ThemeProvider({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  const { themeValue } = useThemeProvider();
  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
}
