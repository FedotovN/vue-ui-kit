import BaseButton from '@/components/Button/BaseButton/BaseButton.vue';
import BaseButtonProps from '@/types/props/Button/BaseButtonProps';
import { colors } from '@/types/colors';
import { Meta, StoryFn, ArgTypes } from '@storybook/vue3';
export default {
  title: 'Button/Base Button',
  component: BaseButton,
  decorators: [
    () => ({
      template: `
          <div style="margin: 1em;">
            <story/>  
          </div>
        `,
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    slots: {
      default: 'Button content',
    },
  },
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
    width: {
      value: 'auto',
      type: 'string',
      description: 'Raw CSS property value.',
      control: {
        type: 'text',
      },
    },
    disabled: {
      value: false,
      type: 'boolean',
      description: 'Prop to disable the button.',
      control: {
        type: 'boolean',
      },
    },
    flat: {
      value: false,
      type: 'boolean',
      description: 'Style variant without background.',
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      value: false,
      type: 'boolean',
      description: 'Style variant without background and with border.',
      control: {
        type: 'boolean',
      },
    },
    raised: {
      value: false,
      type: 'boolean',
      description: 'Style variant with flying effect.',
      control: {
        type: 'boolean',
      },
    },
    rounded: {
      value: false,
      type: 'boolean',
      description: 'Style variant.',
      control: {
        type: 'boolean',
      },
    },
    size: {
      value: 'medium',
      type: 'string',
      control: {
        type: 'inline-radio',
      },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;
const Template: StoryFn = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: `
    <BaseButton v-bind="{...args}">{{ args.default || "Base Button" }}</BaseButton>
  `,
});
export const Default = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
export const Raised = Template.bind({});
Raised.args = { raised: true };
export const Rounded = Template.bind({});
Rounded.args = { rounded: true };
export const Flat = Template.bind({});
Flat.args = { flat: true };
export const Small = Template.bind({});
Small.args = { size: 'small' };
export const Medium = Template.bind({});
Medium.args = { size: 'medium' };
export const Large = Template.bind({});
Large.args = { size: 'large' };
