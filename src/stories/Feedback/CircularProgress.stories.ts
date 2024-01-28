import CircularProgress from '@/components/Feedback/CircularProgress/CircularProgress.vue';
import { colors } from '@/types/colors';
import CircularProgressProps from '@/types/props/Feedback/CircularProgressProps';
import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Feedback / Circular Progress',
  component: CircularProgress,
  argTypes: {
    value: {
      type: 'number',
      control: {
        type: 'range',
      },
    },
    color: {
      type: 'string',
      control: {
        type: 'inline-radio',
      },
      options: Object.keys(colors),
      description: 'Default color variants.',
    },
    height: {
      type: 'string',
      control: {
        type: 'text',
      },
      description: 'CSS height value.',
    },
    width: {
      type: 'string',
      control: {
        type: 'text',
      },
      description: 'CSS width value.',
    },
  } as ArgTypes<CircularProgressProps>,
  decorators: [() => ({ template: `<div style="margin: 1em"><story/></div>` })],
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => ({
  components: { CircularProgress },
  setup() {
    return { args };
  },
  template: `
        <CircularProgress v-bind="{...args}" />
    `,
});
export const Default = Template.bind({});
