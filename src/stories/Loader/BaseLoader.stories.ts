import BaseLoader from '@/components/Loader/BaseLoader/BaseLoader.vue';
import { colors } from '@/types/colors';
import BaseLoaderProps from '@/types/props/Loader/BaseLoaderProps';
import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Loader / Base Loader',
  component: BaseLoader,
  argTypes: {
    color: {
      type: 'string',
      control: {
        type: 'inline-radio',
      },
      options: Object.keys(colors),
      description: 'Default color variants.',
    },
    label: {
      value: '',
      type: 'string',
      description: 'Text to display at bottom of the input.',
      control: {
        type: 'text',
      },
    },
    size: {
      value: '',
      type: 'string',
      description: 'CSS width and height value',
      control: {
        type: 'text',
      },
    },
    borderWidth: {
      value: '',
      type: 'string',
      description: 'CSS border width value',
      control: {
        type: 'text',
      },
    },
    finished: {
      value: false,
      type: 'boolean',
      description: 'Indicate that the loading process is finished',
      control: {
        type: 'boolean',
      },
    },
  } as ArgTypes<BaseLoaderProps>,
  decorators: [() => ({ template: `<div style="margin: 1em"><story/></div>` })],
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => ({
  components: { BaseLoader },
  setup() {
    return { args };
  },
  template: `
        <BaseLoader v-bind="{...args}" />
    `,
});
export const Default = Template.bind({});
