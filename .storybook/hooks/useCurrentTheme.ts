import useDarkModeChannel from "./useDarkModeChannel";
import { themes } from "@storybook/theming";
import { useEffect } from "react";

/**
 * Handle the current theme for Storybook using the addons events channel.
 * @hook useCurrentTheme
 */
export default function useCurrentTheme() {
  const { isDarkMode } = useDarkModeChannel();
  const { light, dark } = themes;
  const theme = isDarkMode ? dark : light;

  useEffect(() => {
    console.log("Current theme is", theme);
  }, [isDarkMode, theme]);

  return { theme };
}
