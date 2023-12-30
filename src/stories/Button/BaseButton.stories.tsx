import BaseButton from "@/components/Button/BaseButton/BaseButton.vue";
import BaseButtonProps from "@/types/props/Button/BaseButtonProps";
import { colors } from "@/types/colors";
import { Meta, StoryFn } from "@storybook/vue3";
export default {
  title: 'Example/Button',
  component: BaseButton,
  args: { label: 'Button' },
} as Meta;
const Template: StoryFn = (args: BaseButtonProps) => ({
  components: { BaseButton },
  setup() { return { args }; },
  render() {
    return (
        <div style="padding: 5px; display: flex; gap: 5px;">
          {Object.keys(colors).map(color => {
            return (
              <div style="display: flex; flex-flow: column; gap: 5px;">
                <BaseButton {...args} color={color}>{color}</BaseButton>
                <BaseButton {...args} color={color} disabled>Disabled</BaseButton>
              </div>
            )
          })}
        </div>
    )
  }
}); 

export const Default = Template.bind({});
Default.args = { };
export const Raised = Template.bind({});
Raised.args = { raised: true };
export const Rounded = Template.bind({});
Rounded.args = { rounded: true };
export const Outlined = Template.bind({});
Outlined.args = { outlined: true };
export const Flat = Template.bind({});
Flat.args = { flat: true };