import RangeInputProps from "@/types/props/Input/RangeInputProps";
import RangeInputVue from "../../../components/Input/RangeInput/RangeInput.vue";
import { render } from "@testing-library/vue";
import { colors, IColors } from "../../../types/colors";
import "@testing-library/jest-dom";
function renderInput(props?: RangeInputProps) {
    const { container } = render(RangeInputVue, { props });
    const input = container.firstChild;
    return { container, input };
}
describe('Input: Range Input', () => {
    test('Renders two native inputs', () => {
        const { container } = renderInput();
        expect(container.querySelectorAll('input').length).toBe(2);
    })
    test('Proper two native inputs value', () => {
        const props: RangeInputProps = {
            minValue: 15,
            maxValue: 85,
        };
        const { container } = renderInput(props);
        const nativeInputs = [...container.querySelectorAll('input')];
        nativeInputs.forEach((input, index) => {
            expect(parseInt(input.value)).toBe(index === 0 ? props.minValue : props.maxValue);
        });
    });
    test('Changes color', () => {
        Object.keys(colors).forEach(key => {
            const { input } = renderInput({ 
                color: (key as keyof IColors)
            });        
            expect(input.style.getPropertyValue('--accent-color')).toBe(colors[key].join(', '));
        });
    });
    test('Corner case: min or max value is too high', () => {
        const props: RangeInputProps = {
            maxValue: Number.MAX_SAFE_INTEGER,
            minValue: Number.MAX_SAFE_INTEGER,
            limit: 150,
        };
        const { container } = renderInput(props);
        const inputs = container.querySelectorAll('input');
        inputs.forEach(input => {
            expect(parseInt(input.value)).toBe(props.limit);
        })
    })
    test('Corner case: min or max value is too low', () => {
        const props: RangeInputProps = {
            maxValue: Number.MIN_SAFE_INTEGER,
            minValue: Number.MIN_SAFE_INTEGER,
            minimum: -50,
        };
        const { container } = renderInput(props);
        const inputs = container.querySelectorAll('input');
        inputs.forEach( input => {
            expect(parseInt(input.value)).toBe(props.minimum);
        })
    })

});
