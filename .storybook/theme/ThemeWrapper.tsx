import React, { useEffect } from "react";

import ThemeProvider from "./ThemeProvider";

/**
 * ThemeWrapper
 * @param children
 * @constructor
 */
export default function ThemeWrapper({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  // Run once.
  useEffect(() => {}, []);
  // Return the ThemeProvider.
  return <ThemeProvider>{children}</ThemeProvider>;
}
