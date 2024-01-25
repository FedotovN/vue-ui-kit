import { Meta, StoryFn } from '@storybook/vue3';
import { colors } from '@/types/colors';
import BaseRadio from '@/components/Radio/BaseRadio/BaseRadio.vue';
export default {
  title: 'Radio/Base Radio',
  component: BaseRadio,
} as Meta;
const Template: StoryFn = (args) => ({
  components: { BaseRadio },
  setup() {
    return {
      args,
      colors,
    };
  },
  template: `
  <div v-if="!args.default" style="display: flex; flex-flow: column; gap: 5px;">
      <BaseRadio v-for="color in colors" name="group" :color="color" v-bind="{...args}" />
  </div>
  <div v-else></div>
  `,
});
export const Default = Template.bind({});
export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Checkbox label',
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Radio',
  disabled: true,
};
