import { render, screen, waitFor } from "@testing-library/vue"
import { colors } from "../../../types/colors";
import ProgressBar from "./ProgressBar.vue"
import "@testing-library/jest-dom";
import ProgressBarProps from "@/types/props/Loader/ProgressBarProps";
let loader;
let defaultProps: ProgressBarProps = { 
    showProgress: true,
    value: 0,
    color: 'primary',
};
let props;
function getUpdatedValue() {
    const updated = props.value + Math.round(Math.random() * 10);
    return updated;
}
describe('Loader: Progress bar', () => {
    beforeAll(() => {
        props = { ...defaultProps };
    })
    beforeEach(() => {
        const { container } = render(ProgressBar, { props });
        loader = container.firstChild;
    })
    afterEach(() => {
        props = { ...defaultProps };
    })
    test('Renders proper progress text node', async () => {
        const label = loader.querySelector('.progress-bar-wrapper-label');
        expect(label).toHaveTextContent('0%');
        props.value = getUpdatedValue();
        waitFor(() => {
            expect(label).toHaveTextContent(`${ props.value }%`);
        })
    })
    test('Accept proper percentage css value', async () => {
        let percentage = loader.style.getPropertyValue('--percentage');
        expect(parseInt(percentage)).toBe(props.value);
        props.value = getUpdatedValue();
        percentage = loader.style.getPropertyValue('--percentage');
        waitFor(() => {
            expect(parseInt(percentage)).toBe(props.value);
        })
    })
    test('Dynamicaly changes CSS color property', async () => {
        expect(loader).toHaveStyle({
            '--accent-color': colors[props.color].join(', '),
        });
        props.color = 'secondary'
        waitFor(() => {
            expect(loader).toHaveStyle({
                '--accent-color': colors[props.color].join(', '),
            });
        })
    })
    test('CORNER CASE: value too high', async () => {
        props.value = props.max + 1000;
        waitFor(() => {
            expect(loader.style.getPropertyValue('--percentage')).toBe(props.max.toString());
        });      
    })
    test('CORNER CASE: value too low', async () => {
        props.value = props.max - 1000;
        waitFor(() => {
            expect(loader.style.getPropertyValue('--percentage')).toBe(props.min.toString());
        });
    })
})