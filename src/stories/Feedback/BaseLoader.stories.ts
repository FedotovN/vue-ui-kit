import SpinnerLoader from "@/components/Feedback/SpinnerLoader/SpinnerLoader.vue";
import { colors } from '@/types/colors';
import BaseLoaderProps from '@/types/props/Feedback/SpinnerLoaderProps';
import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Feedback / Spinner Loader',
  component: SpinnerLoader,
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
  components: { SpinnerLoader },
  setup() {
    return { args };
  },
  template: `
        <SpinnerLoader v-bind="{...args}" />
    `,
});
export const Default = Template.bind({});
