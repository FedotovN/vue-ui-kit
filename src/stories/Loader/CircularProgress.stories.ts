import CircularProgressLoader from '@/components/Loader/CircularProgressLoader/CircularProgressLoader.vue';
import { colors } from '@/types/colors';
import CircularProgressLoaderProps from '@/types/props/Loader/CircularProgressLoaderProps';
import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Loader / Circular Progress Loader',
  component: CircularProgressLoader,
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
  } as ArgTypes<CircularProgressLoaderProps>,
  decorators: [() => ({ template: `<div style="margin: 1em"><story/></div>` })],
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => ({
  components: { CircularProgressLoader },
  setup() {
    return { args };
  },
  template: `
        <CircularProgressLoader v-bind="{...args}" />
    `,
});
export const Default = Template.bind({});
