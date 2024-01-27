import ProgressBar from '@/components/Loader/ProgressBar/ProgressBar.vue';
import ProgressBarProps from '@/types/props/Loader/ProgressBarProps';
import { ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Loader / Progress Bar',
  component: ProgressBar,
  argTypes: {} as ArgTypes<ProgressBarProps>,
  decorators: [() => ({ template: `<div style="margin: 1em"><story/></div>` })],
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => ({
  components: { ProgressBar },
  setup() {
    return { args };
  },
  template: `
        <ProgressBar v-bind="{...args}" />
    `,
});
export const Default = Template.bind({});
