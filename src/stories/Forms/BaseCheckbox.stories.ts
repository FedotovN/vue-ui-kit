import BaseCheckbox from "@/components/Forms/BaseCheckbox/BaseCheckbox.vue"
import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { colors } from '@/types/colors';
import BaseCheckboxProps from '@/types/props/Checkbox/BaseCheckboxProps';
export default {
  title: 'Forms/Base Checkbox',
  component: BaseCheckbox,
  tags: ['autodocs'],
  argTypes: {
    color: {
      value: 'primary',
      type: 'string',
      control: {
        type: 'inline-radio',
      },
      options: Object.keys(colors),
      description:
        'Represented either using default color variants or in [Red, Green, Blue] tuple format.',
    },
    label: {
      value: '',
      type: 'string',
      description: 'Text to display next to the checkbox.',
      control: {
        type: 'text',
      },
    },
    disabled: {
      value: false,
      type: 'boolean',
      description: 'Prop to disable the checkbox.',
      control: {
        type: 'boolean',
      },
    },
    value: {
      value: false,
      type: 'boolean',
      description: 'Checkbox value.',
      control: {
        type: 'boolean',
      },
    },
    modelValue: {
      value: false,
      type: 'boolean',
      description: 'Checkbox value for two-way binding',
      control: {
        type: 'boolean',
      },
    },
  } as ArgTypes<BaseCheckboxProps>,
} as Meta;
const Template: StoryFn = (args) => ({
  components: { BaseCheckbox },
  setup() {
    return { args };
  },
  template: `
      <BaseCheckbox v-bind="{...args}" />
  `,
});

export const Default = Template.bind({});
export const LotOfCheckboxes: StoryFn = (args) => ({
  components: { BaseCheckbox },
  setup() {
    return { args, colors };
  },
  template: `
    <div style="display: flex; flex-flow: column; gap: 5px;">
      <BaseCheckbox v-for="(color, ind) in colors" :key="ind" v-bind="{...args}" :color="color" />
    </div>
  `,
});
