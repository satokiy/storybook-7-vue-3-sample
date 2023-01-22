import { StorybookConfig } from "@storybook/vue3-vite";
const config: StorybookConfig = {
  framework: "@storybook/vue3-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-docs",
    "@storybook/addon-interactions",
  ],
  // global is not definedの回避策（https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/play_function）
  viteFinal: (config) => {
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
    };
  },
};
export default config;
