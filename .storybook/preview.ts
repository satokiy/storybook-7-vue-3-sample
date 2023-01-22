import { Decorator, Parameters } from "@storybook/vue3";
import i18n from "../src/i18n";
import { setup } from "@storybook/vue3";
import pinia, { useCurrentUserStore } from "../src/pinia";

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
setup((app) => {
  if (!app.__VUE_I18N__) {
    app.use(i18n);
    app.use(pinia);
  }
});
