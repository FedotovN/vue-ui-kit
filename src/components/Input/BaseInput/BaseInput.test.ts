import { screen, render, waitFor, getByTestId } from "@testing-library/vue";
import { Color, IColors, colors } from "../../../types/colors";
import "@testing-library/jest-dom";
import BaseInput from "./BaseInput.vue";
import BaseInputProps from "@/types/props/Input/BaseInputProps";
let defaultProps: BaseInputProps = {
    activeColor: 'primary',
        errorColor: 'alert',
        successColor: 'success',
        width: '100%',
        modelValue: 'Base Input',
        placeholder: 'Placeholder',
};
let attrs = {
    'type': 'text'
};
let props: BaseInputProps;
let input, component;
describe('Input: Base Input', () => {
    beforeEach(() => {
        props = { ...defaultProps };
    })
    beforeAll(() => {
        const { container } = render(BaseInput, { props, attrs });
        component = container.firstChild;
        input = getByTestId(component, 'base-input__input');
    })
    it.todo('Renders proper text value');
    it.todo('Native input accepts outer attributes');
    it.todo('Changes color');
})