import type { StorybookConfig } from "@storybook/react-vite";
import { InlineConfig } from "vite";
import stories from "./config/stories";
import addons from "./config/addons";
import viteConfig from "./config/viteconfig";

/**
 * Required Storybook config
 */
const requiredConfig = {
  framework: "@storybook/react-vite",
  stories: stories,
};

/**
 * Optional Storybook config
 */
const optionalConfig = {
  addons: addons,
  core: {
    builder: "@storybook/builder-vite",
  },
  staticDirs: ["../public"],
};

/**
 * Main Config for Storybook
 * @link https://storybook.js.org/docs/react/configure/overview
 */
const config: StorybookConfig = {
  ...requiredConfig,
  ...optionalConfig,
  async viteFinal(config: InlineConfig) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, viteConfig);
  },
};

export default config;
