import BaseCheckbox from "@/components/Checkbox/BaseCheckbox/BaseCheckbox.vue";
import { colors } from "@/types/colors";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Checkbox/Base Checkbox",
  component: BaseCheckbox,
} as Meta;
const Template: StoryFn = (args) => ({
  components: { BaseCheckbox },
  setup() {
    return { args, colors };
  },
  template: `
    <div v-if="!args.default" style="display: flex; flex-flow: column; gap: 5px;">
      <BaseCheckbox v-for="color in colors" label="Checkbox Label" :color="color" />
    </div>
    <div v-else></div>
  `,
});

export const Default = Template.bind({});
