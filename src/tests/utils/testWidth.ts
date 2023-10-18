import { render } from "@testing-library/vue";
import { Component } from "vue";
import "@testing-library/jest-dom";
export default function testWidth(component: Component, propName = 'width', styleName = '--force-width') {
    const widths = ['100px', '200px', '300px', '400px', '500px', '-100px', '-200px', '2000px'];
    const { container, rerender } = render(component);
    const el = container.firstChild;
    const props = {};
    for (let width of widths) {
        props[propName] = width;
        rerender(props);
        expect(el).toHaveStyle({
            [styleName]: width,
        });
    }
}