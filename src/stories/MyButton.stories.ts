import MyButton from "../components/MyButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof MyButton>;

const meta: Meta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: "<MyButton v-bind='args' />",
  }),
  args: {
    label: "ボタン",
    variant: "primary",
    size: "medium",
  },
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
  },
};

export const Default: Story = {};

// export const Login: Story = {
//   args: {
//     label: "Login",
//     variant: "primary",
//     size: "medium",
//   },
// };
// console.log(JSON.stringify(MyButton.__docgenInfo, null, 2));
export default meta;
