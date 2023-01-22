import MyPage from "../components/MyPage.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof MyPage>;

const meta: Meta<typeof MyPage> = {
  title: "page/MyPage",
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: "<MyPage />",
  }),
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "twitter",
      values: [
        {
          name: "twitter",
          value: "#00aced",
        },
        {
          name: "facebook",
          value: "#3b5998",
        },
      ],
    },
  },
};

export const Default: Story = {};

export const ForPc: Story = {};
export const ForMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
    backgrounds: {
      default: "twitter",
    },
  },
};

export default meta;
