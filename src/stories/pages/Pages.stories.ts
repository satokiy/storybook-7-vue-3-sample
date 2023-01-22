import type { StoryObj } from "@storybook/vue3";
import { useRouter } from "vue-router";
import { ref } from "vue";

const meta = {
  title: "pages/Pages",
  parameters: {
    backgrounds: {
      default: "light", // 背景色が白い前提で実装しているのでデフォルトで白色にする
    },
  },
};

function createPageStory(name: string): StoryObj {
  return {
    render: () => ({
      setup() {
        const pageLoaded = ref(false);
        const router = useRouter();
        router.push({ name }).then(() => {
          pageLoaded.value = true;
        });

        return { pageLoaded };
      },
      template: `<template v-if="pageLoaded"><router-view /></template>`,
    }),
  };
}

export default meta;

export const Top = createPageStory("Top");
export const Profile = createPageStory("Profile");
