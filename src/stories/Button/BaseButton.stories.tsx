import React from "react";
import BaseButton from "@/components/Button/BaseButton/BaseButton.vue";
import { Meta, Story } from "@storybook/vue3";
export default {
  title: 'Example/Button',
  component: BaseButton,
  args: { label: 'Button' },
} as Meta;
const Template: Story = (args) => ({
  components: { BaseButton },
  setup() { return { args }; },
  render() {
    return (
      <div style="padding: 5px;">
        <BaseButton>123</BaseButton>
      </div>
    )
  }
}); 

export const Default = Template.bind({});
Default.args = { primary: true };