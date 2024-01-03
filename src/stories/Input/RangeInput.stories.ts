import RangeInput from "@/components/Input/RangeInput/RangeInput.vue";
import BaseButton from "@/components/Button/BaseButton/BaseButton.vue";
import { colors } from "@/types/colors";
import { Meta, StoryFn } from "@storybook/vue3";
export default {
  title: "Input/RangeInput",
  component: { RangeInput },
} as Meta;
const Template: StoryFn = (args) => ({
  components: { RangeInput, BaseButton },
  setup() {
    return { args, colors };
  },
  template: `
  <div v-if="!args.default">
    <div v-for="color in Object.keys(colors)">
      <RangeInput :color="color" double />
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
        <RangeInput :color="color" double />
        <BaseButton :color="color">{{color}}</BaseButton>
      </div>
    </div>
  `,
};
