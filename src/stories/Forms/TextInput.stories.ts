import TextInput from "@/components/Forms/TextInput/TextInput.vue";
import BaseButton from "@/components/Forms/BaseButton/BaseButton.vue";
import BaseInputProps from '@/types/props/Forms/TextInputProps';
import { colors } from '@/types/colors';
import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';
export default {
  component: TextInput,
  title: 'Forms/Text Input',
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: `
        <div style="margin: 1em;"><story/></div>
      `,
    }),
  ],
  argTypes: {
    color: {
      value: 'primary',
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
    value: {
      value: '',
      type: 'string',
      description: 'Input value.',
      control: {
        type: 'text',
      },
    },
    modelValue: {
      value: false,
      type: 'string',
      description: 'Input value for two-way binding',
      control: {
        type: 'text',
      },
    },
    unstyled: {
      value: false,
      type: 'boolean',
      description: 'Input without border and padding',
      control: {
        type: "boolean",
      }
    },
    dynamicLabel: {
      value: '',
      type: 'boolean',
      description: 'Behaviour that moves label on input focus.',
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      value: false,
      type: 'string',
      description: 'Native input placeholder.',
      control: {
        type: 'text',
      },
    },
    width: {
      value: 'auto',
      type: 'string',
      description: 'Raw CSS property value.',
      control: {
        type: 'text',
      },
    },
    autocomplete: {
      value: 'off',
      type: 'string',
      description: 'Native autocomplere attribute.',
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      value: '',
      type: 'string',
      description: 'Error message to display at the bottom of the input.',
      control: {
        type: 'text',
      },
    },
    errorWrap: {
      value: false,
      type: 'boolean',
      description: 'Wrap long error message',
      control: {
        type: 'boolean',
      },
    },
    required: {
      value: false,
      type: 'boolean',
      description: 'Native autocomplete attribute',
      control: {
        type: 'boolean',
      },
    },
  } as ArgTypes<BaseInputProps>,
} as Meta;
const Template: StoryFn = (args) => ({
  components: { TextInput },
  setup() {
    return { args, colors };
  },
  template: `
    <TextInput v-bind="{...args}" />
  `,
});
export const Default = Template.bind({});
export const Form: StoryFn = (args) => ({
  components: { TextInput, BaseButton },
  setup() {
    return { args };
  },
  template: `
    <form @submit.prevent style="display: flex; gap: 1em; align-items: end;">
      <TextInput v-bind="{...args}" required />
      <BaseButton v-bind="{...args}" width="auto">Base Button</BaseButton>
    </form>
  `,
});
Form.argTypes = {
  flat: {
    value: false,
    type: 'boolean',
    name: 'Button: flat',
    description: 'Style variant without background.',
    control: {
      type: 'boolean',
    },
  },
  outlined: {
    value: false,
    type: 'boolean',
    name: 'Button: outlined',
    description: 'Style variant without background and with border.',
    control: {
      type: 'boolean',
    },
  },
  raised: {
    value: false,
    type: 'boolean',
    name: 'Button: raised',
    description: 'Style variant with flying effect.',
    control: {
      type: 'boolean',
    },
  },
  rounded: {
    value: false,
    type: 'boolean',
    name: 'Button: rounded',
    description: 'Style variant.',
    control: {
      type: 'boolean',
    },
  },
};
