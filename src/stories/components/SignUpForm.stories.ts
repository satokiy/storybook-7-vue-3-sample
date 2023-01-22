import SignUpForm from '../../../src/components/SignUpForm.vue';
import type { Meta, StoryObj } from "@storybook/vue3";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

type Story = StoryObj<typeof SignUpForm>;

const meta: Meta<typeof SignUpForm> = {
  title: "components/SignUpForm",
  component: SignUpForm,
  render: (args) => ({
    components: { SignUpForm },
    setup() {
      return { args };
    },
    template: "<SignUpForm v-bind='args' />",
  }),
  tags: ["autodocs"]
};

export const Default: Story = {};

export const Complete: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByLabelText("Name", { selector: "input" });
    const ageInput = canvas.getByLabelText("Age", { selector: "input" });
    const submitButton = canvas.getByRole("button", { name: "確定" });

    await userEvent.type(nameInput, "sasaki");
    await userEvent.clear(ageInput);
    await userEvent.type(ageInput, "30");
    await userEvent.click(submitButton);

    // エラーメッセージが表示されていないことをアサート
    expect(await canvas.queryByText("名前を入力してください")).toBeNull();
    expect(
      await canvas.queryByText("18歳以上でなければ登録できません")
    ).toBeNull();
  },
};

export const Error: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByLabelText("Name", { selector: "input" });
    const ageInput = canvas.getByLabelText("Age", { selector: "input" });
    const submitButton = canvas.getByRole("button", { name: "確定" });

    await userEvent.type(nameInput, "");
    await userEvent.clear(ageInput);
    await userEvent.type(ageInput, "17");
    await userEvent.click(submitButton);

    // エラーメッセージが表示されていることをアサート
    expect(await canvas.queryByText("名前を入力してください")).toBeTruthy();
    expect(
      await canvas.queryByText("18歳以上でなければ登録できません")
    ).toBeTruthy();
  },
};

export default meta;