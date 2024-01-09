import BaseButton from "@/components/Button/BaseButton/BaseButton.vue";
import BaseButtonProps from "@/types/props/Button/BaseButtonProps";
import { colors } from "@/types/colors";
import { Meta, StoryFn } from "@storybook/vue3";
export default {
  title: "Button/Base Button",
  component: BaseButton,
} as Meta;
const Template: StoryFn = (args: BaseButtonProps) => ({
  components: { BaseButton },
  setup() {
    return { args, colors };
  },
  template: `
    <div style="display: flex; flex-flow: column; gap: 5px;">
      <div v-for="color in Object.keys(colors)" style="display: flex; flex-wrap: wrap; gap: 5px;">
        <BaseButton :color="color" v-bind="{...args}">Button {{ color }}</BaseButton> 
        <BaseButton :color="color" v-bind="{...args}" disabled>Disabled button {{ color }}</BaseButton> 
      </div>
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
