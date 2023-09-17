import { screen, render } from "@testing-library/vue";
import BaseInput from "./BaseInput.vue";
import BaseInputProps from "@/types/props/Input/BaseInputProps";
let defaultProps: BaseInputProps = {
    value: 'Base Input',
    activeColor: 'primary',
    successColor: 'success',
    errorColor: 'alert',
};
let props: BaseInputProps;
let input;
describe('Input: Base Input', () => {
    beforeEach(() => {
        props = { ...defaultProps };
    })
    beforeAll(() => {
        const { container } = render(BaseInput, { props });
        input = container.firstChild;
    })
    test('Renders proper text value', () => {
        screen.debug(input);
    })
});