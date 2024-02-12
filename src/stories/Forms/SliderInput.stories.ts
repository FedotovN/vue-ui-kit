import SliderInput from '@/components/Forms/SliderInput/SliderInput.vue';
import BaseButton from '@/components/Forms/BaseButton/BaseButton.vue';
import { colors } from '@/types/colors';
import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import SliderInputProps from '@/types/props/Forms/SliderInputProps';
import { ControlType } from '@storybook/blocks';
export default {
  title: 'Forms / Slider Input',
  component: SliderInput,
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
      description: 'Text to display on top of the input.',
      control: {
        type: 'text',
      },
    },
    disabled: {
      value: false,
      type: 'boolean',
      description: 'Prop to disable the input.',
      control: {
        type: 'boolean',
      },
    },
    width: {
      value: 'auto',
      type: 'number',
      description: 'Raw CSS property value.',
      control: {
        type: 'text' as ControlType,
      },
    },
    max: {
      value: 100,
      type: 'number',
      description: 'Native input max value.',
      control: {
        type: 'range' as ControlType,
      },
    },
    min: {
      value: 0,
      type: 'number',
      description: 'Native input min value.',
      control: {
        type: 'range' as ControlType,
      },
    },
    minimum: {
      value: 0,
      type: 'number',
      description: 'Base Input bottom boundary.',
      control: {
        type: 'range' as ControlType,
      },
    },
    limit: {
      value: 0,
      type: 'number',
      description: 'Base Input top boundary.',
      control: {
        type: 'range' as ControlType,
      },
    },
    step: {
      value: 0,
      type: 'number',
      description: 'Native input step attribute.',
      control: {
        type: 'range' as ControlType,
      },
    },
  } as ArgTypes<SliderInputProps>,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: { SliderInput, BaseButton },
  setup() {
    return { args, colors };
  },
  template: `
    <SliderInput v-bind="{...args}" />
  `,
});
export const Default: StoryFn = Template.bind({});

export const WithLabel: StoryFn = Template.bind({});
WithLabel.args = {
  label: 'Slider Input',
};
