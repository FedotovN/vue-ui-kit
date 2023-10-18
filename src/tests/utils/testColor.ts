import { IColors, colors } from "../../types/colors";
import useColor from "../../composables/useColor";
import { Component } from "vue";
import { render } from "@testing-library/vue";
const { getColor } = useColor();
export default async function testColor(component: Component, propName = 'color', styleName = '--accent-color',) {
    const { container, rerender } = render(component);
    const el = container.firstChild;
    const props = {};
    for (let key in colors) {
        props[propName] = key; 
        await rerender(props);
        const targetColor = getColor(key as keyof IColors).join(', ');
        expect(el).toHaveStyle({
            [styleName]: targetColor,
        });
    }
}