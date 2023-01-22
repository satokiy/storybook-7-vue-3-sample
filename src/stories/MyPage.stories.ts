import MyPage from "../components/MyPage.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

type Story = StoryObj<typeof MyPage>;

const meta: Meta<typeof MyPage> = {
  title: "MyPage",
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: "<MyPage />",
  }),
  parameters: {
    viewport: {
      viewports: {
        pc: {
          name: "Min PC Layout",
          styles: {
            height: "100%",
            width: "992px",
          },
        },
        mobile: {
          name: "Min Mobile Layout",
          styles: {
            height: "100%",
            width: "375px",
          },
        },
      },
    },
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

export const ForPc: Story = {
  parameters: {
    viewport: {
      defaultViewport: "pc",
    },
  },
};
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
