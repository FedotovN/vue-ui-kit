import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import FileInput from '@/components/Forms/FileInput/FileInput.vue';
import FileInputProps from '@/types/props/Forms/FileInputProps';
import { colors } from '@/types/colors';
export default {
  component: FileInput,
  title: 'Forms / File Input',
  tags: ['autodocs'],
  argTypes: {
    color: {
      type: 'string',
      control: {
        type: 'inline-radio',
      },
      options: Object.keys(colors),
      description: 'Default color variants.',
    },
    accept: {
      description: 'Native input accept attribute.',
      type: 'string',
    },
    multiple: {
      description: 'Native input multiple attribute.',
      type: 'boolean',
    },
    disabled: {
      description: 'Disable file input component.',
      type: 'boolean',
    },
  } as ArgTypes<FileInputProps>,
} as Meta;
const Template: StoryFn = (args) => ({
  components: { FileInput },
  setup() {
    return { args };
  },
  template: ` <FileInput v-bind="{...args}">Upload a File</FileInput> `,
});
export const Default = Template.bind({});
