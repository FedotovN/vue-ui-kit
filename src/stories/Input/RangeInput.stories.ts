import { Meta, StoryFn } from "@storybook/vue3";
import { colors } from "@/types/colors";
import RangeInput from "@/components/Input/RangeInput/RangeInput.vue";
export default {
  title: "Input/Range Input",
  component: RangeInput,
} as Meta;
const Template: StoryFn = (args) => ({
  components: {
    RangeInput,
  },
  setup() {
    return { args, colors };
  },
  template: `
    <div v-if="!args.default">
      <div v-for="color in colors">
        <RangeInput :color="color" />
      </div>
    </div>
    <div v-else>
      ${args.default}
    </div>
  `,
});

export const Default = Template.bind({});
