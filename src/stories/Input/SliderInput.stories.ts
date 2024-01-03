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
  <div v-if="!args.default">
    <div v-for="color in Object.keys(colors)">
      <SliderInput :color="color" />
    </div>
  </div>
  <div v-else>
    ${args.default}
  </div>
  `,
});
export const Default = Template.bind({});
export const WithButtons = Template.bind({});
WithButtons.args = {
  default: `
    <div style="display: flex; flex-flow: column; gap: 10px;">
      <div v-for="color in Object.keys(colors)" style="display: flex; gap: 10px;">
        <SliderInput :color="color" double />
        <BaseButton :color="color">{{color}}</BaseButton>
      </div>
    </div>
  `,
};
