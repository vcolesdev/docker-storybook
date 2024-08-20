import useStoriesAppTheme from ".storybook/hooks/app/useStoriesAppTheme";
import { useCallback, useEffect } from "react";

/**
 * Bootstrap our theme based on dark mode.
 * @hook useBootstrapTheme
 * @param isDarkTheme
 */
export default function useBootstrapTheme(isDarkTheme: boolean) {
  const { theme, switchTheme } = useStoriesAppTheme();
  const newTheme = isDarkTheme ? "dark" : "light";

  // Initialize the theme.
  const onInitTheme = useCallback(() => switchTheme(newTheme), [switchTheme, isDarkTheme]);

  // Initialize the theme on mount.
  useEffect(() => {
    onInitTheme();
  }, [theme, isDarkTheme]);
}
