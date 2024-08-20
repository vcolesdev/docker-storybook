/**
 * Dark Theme
 * @link https://storybook.js.org/docs/react/configure/theming
 */
import { create } from "@storybook/theming/create";
import { ThemeVars } from "@storybook/theming";

const Dark = create({
  base: "dark" as "dark",

  fontBase: '"system-ui", sans-serif',
  fontCode: "monospace",

  appPreviewBg: "#222", // Preview BG (Stories & Docs)
}) as ThemeVars;

export default Dark;
