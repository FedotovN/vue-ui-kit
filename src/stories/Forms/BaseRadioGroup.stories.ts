import { Meta, StoryFn } from '@storybook/vue3';
import { colors } from '@/types/colors';
import BaseRadioGroup from "@/components/Forms/BaseRadioGroup/BaseRadioGroup.vue";
import BaseRadioProps from '@/types/props/Forms/Radio/BaseRadioProps';
import BaseRadioGroupProps from '@/types/props/Forms/Radio/BaseRadioGroupProps';
export default {
  title: 'Forms/Radio/Base Radio Group',
  component: BaseRadioGroup,
} as Meta;
const Template: StoryFn = (args) => ({
  components: { BaseRadioGroup },
  setup() {
    return {
      args,
      colors,
    };
  },
  template: `
  <div v-if="!args.default" style="display: flex; flex-flow: column; gap: 5px;">
      <BaseRadioGroup name="group" v-bind="{...args}" />
  </div>
  <div v-else></div>
  `,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Base Radio Group',
  asColumn: true,
  items: [
    { color: 'alert', label: 'First option', value: 'Car' },
    { color: 'alert', label: 'Second option', value: 'Airplane' },
    {
      color: 'alert',
      label: 'Disabled option',
      disabled: true,
      value: 'Train',
    },
    { label: 'Third option', value: 'Horse' },
  ] as Array<BaseRadioProps>,
};
export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Base Radio Group',
  items: [
    { color: 'alert', label: 'First option', value: 'Car' },
    { color: 'alert', label: 'Second option', value: 'Airplane' },
    {
      color: 'alert',
      label: 'Disabled option',
      disabled: true,
      value: 'Train',
    },
    { label: 'Third option', value: 'Horse' },
  ] as Array<BaseRadioProps>,
  showValue: true,
} as BaseRadioGroupProps;
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Radio',
  items: [
    { color: 'alert', label: 'First option', value: 'Car' },
    { color: 'alert', label: 'Second option', value: 'Airplane' },
    {
      color: 'alert',
      label: 'Disabled option',
      disabled: true,
      value: 'Train',
    },
    { label: 'Third option', value: 'Horse' },
  ] as Array<BaseRadioProps>,
  disabled: true,
};
