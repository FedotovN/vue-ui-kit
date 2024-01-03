import BaseButton from "@/components/Button/BaseButton/BaseButton.vue";
import BaseButtonProps from "@/types/props/Button/BaseButtonProps";
import { Meta, StoryFn } from "@storybook/vue3";
export default {
  title: "Button/Base Button",
  component: BaseButton,
} as Meta;
const Template: StoryFn = (args: BaseButtonProps) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; gap: 5px;">
      <BaseButton color="primary" v-bind={...args} >Button</BaseButton>
      <BaseButton color="secondary" v-bind={...args} >Button</BaseButton>
      <BaseButton color="alert" v-bind={...args} >Button</BaseButton>
      <BaseButton color="warning" v-bind={...args} >Button</BaseButton>
      <BaseButton color="success" v-bind={...args} >Button</BaseButton>
      <BaseButton color="none" v-bind={...args} >Button</BaseButton>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
export const Raised = Template.bind({});
Raised.args = { raised: true };
export const Rounded = Template.bind({});
Rounded.args = { rounded: true };
export const Outlined = Template.bind({});
Outlined.args = { outlined: true };
export const Flat = Template.bind({});
Flat.args = { flat: true };
