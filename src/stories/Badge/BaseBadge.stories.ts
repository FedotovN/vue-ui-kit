import { ArgTypes, Meta } from "@storybook/vue3";
import BaseBadge from "@/components/Badge/BaseBadge/BaseBadge.vue";
import BaseBadgeProps from "@/types/props/Badge/BaseBadgeProps";
import { colors } from "@/types/colors";
export default {
    title: 'Badge / Base Badge',
    decorators: [
        () => ({ template: `<div style="display: flex; gap: 1em;"><story/></div>` }),
    ],
    component: { BaseBadge },
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: 'string',
            name: 'Main slot',
            control: {
                type: 'text',
            },
        },
        color: {
            value: 'primary',
            type: 'string',
            control: {
                type: 'inline-radio',
            },
            options: Object.keys(colors),
            description: 'Default color variants.',
        },
        size: {
            value: 'small',
            type: 'string',
            control: {
                type: 'inline-radio'
            },
            options: [
                'small', 'medium', 'large',
            ]
        },
        filled: {
            value: false,
            type: "boolean",
            control: {
                type: 'boolean'
            },
            description: 'Fill your badge with accent color.',
        },
        outlined: {
            defaultValue: false,
            type: "boolean",
            control: {
                type: 'boolean'
            },
            description: 'Adds a border with accent color',
        },
        rounded: {
            value: false,
            type: "boolean",
            control: {
                type: 'boolean'
            }
        },
        bold: {
            value: false,
            type: "boolean",
            control: {
                type: 'boolean'
            }
        },
        caps: {
            value: false,
            type: "boolean",
            control: {
                type: 'boolean'
            }
        }
    } as ArgTypes<BaseBadgeProps>
} as Meta;
const Template = (args) => ({
    components: { BaseBadge },
    setup() {
        return { args }
    },
    template: `
        <BaseBadge v-bind="{...args}">{{ args.children || 'Base Badge' }}</BaseBadge>
    `
});
export const Default = Template.bind({});
export const Rounded = Template.bind({});
Rounded.args = { rounded: true }
export const Filled = Template.bind({});
Filled.args = { filled: true }
export const Outlined = Template.bind({});
Outlined.args = { outlined: true }
export const Bold = Template.bind({});
Bold.args = { bold: true }
export const Caps = Template.bind({});
Caps.args = { caps: true }
export const LotOfBadges = (args) => ({
    components: { BaseBadge },
    setup() {
        return { args, colors }
    },
    template: `
        <BaseBadge v-for="(color, ind) in colors" :key="ind" v-bind="{...args}" :color="color">{{ args.children || '1' }}</BaseBadge>
    `
});
LotOfBadges.args = {
    rounded: true,
}