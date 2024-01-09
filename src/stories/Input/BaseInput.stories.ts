import BaseInput from "@/components/Input/BaseInput/BaseInput.vue";
import { colors } from "@/types/colors";
import { Meta, StoryFn } from "@storybook/vue3";
export default {
  component: BaseInput,
  title: "Input/Base Input",
} as Meta;
const Template: StoryFn = (args) => ({
  components: { BaseInput },
  setup() {
    return { args, colors };
  },
  template: `
    <div style="display: flex; flex-flow: column; gap: 18px; padding: 2px;">
      <BaseInput v-for="color in colors" :color="color" v-bind="{...args}" />
    </div>
  `,
});
export const Default = Template.bind({});
export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Base Input",
};
export const DynamicLabel = Template.bind({});
DynamicLabel.args = {
  label: "Base Input",
  dynamicLabel: true,
};
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: "Base Input",
  placeholder: "Base Input",
};
