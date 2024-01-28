import { ArgTypes, Meta, StoryFn } from "@storybook/vue3";
import BaseToggle from "@/components/Forms/BaseToggle/BaseToggle.vue";
import BaseToggleProps from "@/types/props/Forms/BaseToggleProps";
export default {
    component: BaseToggle,
    title: "Forms / Base Toggle",
    tags: ['autodocs'],
    argTypes: {} as ArgTypes<BaseToggleProps>
} as Meta
const Template: StoryFn = (args) => ({
    components: { BaseToggle },
    setup() {
        return { args }
    },
    template: ` <BaseToggle v-bind="{...args}" /> `
});
export const Default = Template.bind({});