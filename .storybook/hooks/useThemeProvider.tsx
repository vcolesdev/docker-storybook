import { useMemo, useState } from "react";

import type { Theme } from "../theme/ThemeContext";
import { ThemeContextValue } from "../theme/ThemeContext";

/**
 * Handles the retrieval of the current theme value. Handles the theme provider.
 * @hook useThemeProvider
 */
export default function useThemeProvider() {
  const [theme, setTheme] = useState<Theme>(null);

  // Handles the theme value.
  const themeValue: ThemeContextValue = useMemo(() => {
    const updateTheme = (newTheme: Theme) => setTheme(newTheme);
    return { theme, switchTheme: updateTheme };
  }, [theme, setTheme]);

  return { themeValue };
}
