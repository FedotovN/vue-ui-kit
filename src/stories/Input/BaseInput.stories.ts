import BaseInput from "@/components/Input/BaseInput/BaseInput.vue";
import BaseButton from "@/components/Button/BaseButton/BaseButton.vue";
import BaseInputProps from "@/types/props/Input/BaseInputProps";
import { colors } from "@/types/colors";
import { ArgTypes, Meta, StoryFn } from "@storybook/vue3";
export default {
  component: BaseInput,
  title: "Input/Base Input",
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: `
        <div style="margin: 1em;"><story/></div>
      `
    })
  ],
  argTypes: {
    color: {
      value: 'primary',
      type: "string",
      control: { 
        type: 'inline-radio'
      },
      options: Object.keys(colors),
      description: "Default color variants.",
    },
    label: {
      value: "",
      type: 'string',
      description: "Text to display on top of the input.",
      control: {
        type: 'text'
      }
    },
    disabled: {
      value: false,
      type: 'boolean',
      description: "Prop to disable the input.",
      control: {
        type: 'boolean'
      }
    },
    value: {
      value: '',
      type: 'string',
      description: "Input value.",
      control: {
        type: 'text'
      }
    },
    modelValue: {
      value: false,
      type: 'string',
      description: "Input value for two-way binding",
      control: {
        type: 'text'
      },
    },
    dynamicLabel: {
      value: '',
      type: 'boolean',
      description: 'Behaviour that moves label on input focus.',
      control: {
        type: 'boolean',
      }
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
      description: "Raw CSS property value.",
      control: { 
        type: 'text'
      },
    },
    autocomplete: {
      value: "off",
      type: 'string',
      description: "Native autocomplere attribute.",
      control: {
        type: 'text',
      },
    }
  } as ArgTypes<BaseInputProps>,  
} as Meta;
const Template: StoryFn = (args) => ({
  components: { BaseInput },
  setup() {
    return { args, colors };
  },
  template: `
    <BaseInput v-bind="{...args}" />
  `,
});
export const Default = Template.bind({});
export const NextToTheButton: StoryFn = (args) => ({
  components: { BaseInput, BaseButton },
  setup() {
    return { args }
  },
  template: `
    <div style="display: flex; gap: 1em; align-items: end;">
      <BaseInput v-bind="{...args}" />
      <BaseButton v-bind="{...args}" width="auto">Base Button</BaseButton>
    </div>
  `
})
NextToTheButton.argTypes = {
  flat: {
    value: false,
    type: 'boolean',
    name: "Button: flat",
    description: "Style variant without background.",
    control: {
      type: 'boolean'
    }
  },
  outlined: {
    value: false,
    type: 'boolean',
    name: "Button: outlined",
    description: "Style variant without background and with border.",
    control: {
      type: 'boolean'
    }
  },
  raised: {
    value: false,
    type: 'boolean',
    name: "Button: raised",
    description: "Style variant with flying effect.",
    control: {
      type: 'boolean'
    }
  },
  rounded: {
    value: false,
    type: 'boolean',
    name: "Button: rounded",
    description: "Style variant.",
    control: {
      type: 'boolean'
    }
  },
};