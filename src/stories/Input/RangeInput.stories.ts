import { ArgTypes, Meta, StoryFn } from "@storybook/vue3";
import { colors } from "@/types/colors";
import RangeInput from "@/components/Input/RangeInput/RangeInput.vue";
import RangeInputProps from "@/types/props/Input/RangeInputProps";
export default {
  title: "Input/Range Input",
  component: RangeInput,
  argTypes: {
    
  } as ArgTypes<RangeInputProps>,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: {
    RangeInput,
  },
  setup() {
    return { args, colors };
  },
  template: `
    <RangeInput v-bind="{...args}" />
  `,
});

export const Default = Template.bind({});
