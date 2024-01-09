import SliderInput from "@/components/Input/SliderInput/SliderInput.vue";
import BaseButton from "@/components/Button/BaseButton/BaseButton.vue";
import { colors } from "@/types/colors";
import { Meta, StoryFn } from "@storybook/vue3";
export default {
  title: "Input/Slider Input",
  component: { SliderInput },
} as Meta;
const Template: StoryFn = (args) => ({
  components: { SliderInput, BaseButton },
  setup() {
    return { args, colors };
  },
  template: `
  <div>
    <div v-for="color in Object.keys(colors)">
      <SliderInput :color="color" v-bind="{...args}">
        ${args.default}
      </SliderInput>
    </div>
  </div>
  `,
});
export const Default = Template.bind({});
export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Min. price, USD",
};
export const SlotValue = Template.bind({});
SlotValue.args = {
  label: "Min. price, USD",
  default: `
    <template #value={value}>
      <small style="padding-left: 10px;">{{value}}</small>
    </template>
  `,
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Min. price, USD",
  default: `
    <template #value={value}>
      <small style="padding-left: 10px;">{{value}}</small>
    </template>
  `,
  disabled: true,
};
