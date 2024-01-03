import BaseInput from "@/components/Input/BaseInput/BaseInput.vue";
import BaseButton from "@/components/Button/BaseButton/BaseButton.vue";
import { colors } from "@/types/colors";
import { Meta, StoryFn } from "@storybook/vue3";
export default {
  component: BaseInput,
  title: "Input/Base Input",
} as Meta;
const Template: StoryFn = (args) => ({
  components: { BaseInput, BaseButton },
  setup() {
    return { args, colors };
  },
  template: `
    <div>
    <div v-if="args.default">
      ${args.default}
    </div>
      <div style="display: flex; flex-flow: column; gap: 20px; padding: 10px;" v-else>
        <div v-for="color in Object.keys(colors)" style="display: flex; align-items: center;">
          <BaseInput v-bind="{...args}" :label="'Color '+color" :color="color" placeholder="Base Input" />
        </div>
      </div>
    </div>
  `,
});
export const Default = Template.bind({});
export const DynamicLabel = Template.bind({});
DynamicLabel.args = { dynamicLabel: true };
export const WithButton = Template.bind({});
WithButton.args = {
  dynamicLabel: true,
  width: "225px",
  default: `
    <div style="display: flex; flex-flow: column; gap: 20px; padding: 10px;">
      <div v-for="color in Object.keys(colors)" style="display: flex; align-items: center; gap: 5px; width: 100%;">
        <BaseInput v-bind="{...args}" :label="'Color '+color" :color="color" placeholder="Base Input" />
        <BaseButton :color="color" outlined>Button {{color}}</BaseButton>
      </div>
    </div>
  `,
};
