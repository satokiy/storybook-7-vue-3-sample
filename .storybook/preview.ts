import { Decorator, Parameters } from "@storybook/vue3";
import i18n from "../src/i18n";
import { setup } from "@storybook/vue3";
import pinia, { useCurrentUserStore } from "../src/pinia";
import { createRouter } from "../src/router";

export const parameters: Parameters = {};
export const decorators: Decorator[] = [
  (_story, context) => {
    i18n.global.locale = context.globals.locale;
    return {
      setup() {
        const currentUserStore = useCurrentUserStore();
        currentUserStore.$reset();
      },
      template: "<story></story>",
    };
  },
];

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "多言語設定",
    defaultValue: "ja",
    toolbar: {
      icon: "globe",
      items: ["ja", "en"],
    },
  },
};

// Storybook用にインメモリルーターを作成
// storybookはiframe上に形成するため、URLを直接使えない
const router = createRouter("memory");

setup((app) => {
  if (!app.__VUE_I18N__) {
    app.use(i18n);
    app.use(pinia);
    app.use(router);
  }
});
