import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import BaseToggle from '@/components/Forms/BaseToggle/BaseToggle.vue';
import BaseToggleProps from '@/types/props/Forms/BaseToggleProps';
import { colors } from '@/types/colors';
export default {
  component: BaseToggle,
  title: 'Forms / Base Toggle',
  tags: ['autodocs'],
  argTypes: {
    color: {
      type: 'string',
      control: {
        type: 'inline-radio',
      },
      options: Object.keys(colors),
      description: 'Default color variants.',
    },
    disabled: {
      value: false,
      type: 'boolean',
      description: 'Prop to disable the toggle.',
      control: {
        type: 'boolean',
      },
    },
  } as ArgTypes<BaseToggleProps>,
} as Meta;
const Template: StoryFn = (args) => ({
  components: { BaseToggle },
  setup() {
    return { args };
  },
  template: ` <BaseToggle v-bind="{...args}" /> `,
});
export const Default = Template.bind({});
