import useStoriesAppTheme from ".storybook/hooks/app/useStoriesAppTheme";
import { useEffect } from "react";

/**
 * Control the theme of the application through local storage.
 * @hook useStorageApiTheme
 * @param isDarkTheme
 */
export default function useStorageApiTheme(isDarkTheme: boolean) {
  const storage: Storage = window.localStorage;

  const themeStorage = storage.getItem("theme");

  const { theme } = useStoriesAppTheme();

  useEffect(() => {
    storage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme, storage, themeStorage, theme]);
}
