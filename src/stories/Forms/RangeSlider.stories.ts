import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ControlType } from '@storybook/blocks';
import { colors } from '@/types/colors';
import RangeSlider from "@/components/Forms/RangeSlider/RangeSlider.vue";
import RangeInputProps from '@/types/props/Input/RangeSliderProps';
export default {
  title: 'Forms/Range Input',
  component: RangeSlider,
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
    minRange: {
      value: 0,
      type: 'number',
      description: 'Minimal required range between bottom and top values.',
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
    modelValue: {
      value: { from: 0, to: 100 },
      description:
        'Base Input value for two-way binding. Takes object of type { from: number, to: number }',
      control: {
        type: 'object' as ControlType,
      },
    },
    value: {
      value: { from: 0, to: 100 },
      description:
        'Base Input value. Takes object of type { from: number, to: number }',
      control: {
        type: 'object' as ControlType,
      },
    },
  } as ArgTypes<RangeInputProps>,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: {
    RangeSlider,
  },
  setup() {
    return { args, colors };
  },
  template: `
    <RangeSlider v-bind="{...args}" />
  `,
});

export const Default = Template.bind({});
