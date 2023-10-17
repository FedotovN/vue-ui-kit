import BaseInputProps from "@/types/props/Input/BaseInputProps";
import { getByTestId, render, screen, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import BaseInput from "./BaseInput.vue";
import { IColors, colors } from "../../../types/colors";
import { InputHTMLAttributes } from "vue";
function renderInput(props?: BaseInputProps, attributes?: InputHTMLAttributes) {
    const attrs: Record<string, unknown> = attributes as Record<string, unknown>;
    const { container } = render(BaseInput, { props, attrs });
    const input = container.firstChild;
    return { container, input };
}
describe('Input: Base Input', () => {
    test('Renders input element', () => {
        const { container } = renderInput();
        expect(getByTestId(container, 'base-input__input')).toBeInTheDocument();
    });
    test('Renders proper', () => {
        const placeholder = 'placeholder';
        const { container } = renderInput({ placeholder });
        expect(container.querySelector('.base-input-label')).toHaveTextContent(placeholder);
    });
    test('Lifts placeholder if pass value', () => {
        const modelValue = 'Base Input';
        const placeholder = 'placeholder';
        const { container } = renderInput({ modelValue, placeholder });
        expect(container.querySelector('.base-input-label')).toHaveClass("lifted");
    });
    test('Changes Color: Active & Error', () => {
        let colorKeys = {
            activeColor: '--active-color',
            errorColor: '--error-color',
        };
        Object.keys(colorKeys).forEach(colorKey => {
            Object.keys(colors).forEach(key => {
                const { input } = renderInput({ 
                    [colorKey]: (key as keyof IColors)
                });        
                expect(input.style.getPropertyValue(colorKeys[colorKey])).toBe(colors[key].join(', '));
            });
        });
    });
    test('Passes outer attributes to native input', () => {
        const attrs = {};
        const attributes = {
            value: ['value', 'another value'],
            type: ['number', 'password']
        }
        const { input } = renderInput({}, { ...attrs });
        Object.keys(attributes).forEach(key => {
            attributes[key].forEach(value => {
                attrs[key] = value;
                waitFor(() => {
                    expect(input).toHaveAttribute('value', value);
                })
            })
        });
    });
    test('Changes width', () => {
        const width = '500px';
        const { input } = renderInput({ width });
        expect(input.style.getPropertyValue('--force-width')).toBe(width);
    });
});