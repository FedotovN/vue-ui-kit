import BaseDropdown from "@/components/Forms/BaseDropdown/BaseDropdown.vue";
import { Meta, StoryFn, ArgTypes } from '@storybook/vue3';
import BaseDropdownProps from "@/types/props/Forms/BaseDropdownProps";
export default {
  title: 'Forms/Base Dropdown',
  component: BaseDropdown,
  decorators: [],
  tags: ['autodocs'],
  argTypes: {} as ArgTypes<BaseDropdownProps>
} as Meta;
const Template: StoryFn = (args) => ({
  components: { BaseDropdown },
  setup() {
    return { args };
  },
  template: `
    <div class="dropdown-default-story">
      <BaseDropdown v-bind="{...args}" />
    </div>
  `,
});
export const Default = Template.bind({});
