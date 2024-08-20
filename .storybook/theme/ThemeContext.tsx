import { createContext } from "react";

type Theme = "light" | "dark" | null;

interface ThemeContextValue {
  theme: Theme;
  switchTheme: (newTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export { type Theme, type ThemeContextValue, ThemeContext };
