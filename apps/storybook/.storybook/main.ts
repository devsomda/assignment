import type { StorybookConfig } from "@storybook/react-vite";

import { dirname } from "path";

import { fileURLToPath } from "url";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../packages/ui/src/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: async (config) => {
    // pnpm workspace 패키지 resolve를 위한 설정
    if (config.resolve) {
      config.resolve.dedupe = config.resolve.dedupe || [];
      config.resolve.dedupe.push("react", "react-dom");
    }

    // CSS Modules를 위한 설정
    if (!config.css) {
      config.css = {};
    }
    config.css.modules = {
      ...config.css.modules,
      localsConvention: "camelCase",
    };

    return config;
  },
};
export default config;
