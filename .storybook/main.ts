import type { StorybookConfig } from "@storybook/vue3-vite";
import plugin from "@vitejs/plugin-vue-jsx";
import { PluginOption } from "vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  // async viteFinal(config) {
  //   config.plugins = [
  //     ...[config.plugins].flat().filter((p) => !Array.isArray(p)),
  //     plugin() as any,
  //     {
  //       exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
  //     },
  //   ];
  //   return config;
  // },
};
export default config;
