import { colors } from "../../../types/colors";
import CircularProgressLoader from "../../../components/Loader/CircularProgressLoader/CircularProgressLoader.vue";
import CircularProgressLoaderProps from "@/types/props/Loader/CircularProgressLoaderProps"
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/vue";
describe('Loader: Circular Progress Loader', () => {
    let defaultProps: CircularProgressLoaderProps;
    let props: typeof defaultProps;
    let loader;
    beforeAll(() => {
        defaultProps = {
            value: 0,
            color: 'primary',
            max: 100,
            min: 0,
            showProgress: true,
        };
    })
    beforeEach(() => {
        props = { ...defaultProps };
        const { container } = render(CircularProgressLoader, { props });
        loader = container.firstChild;
    })
    test('Renders proper progress text node', async () => {
        const labelContainer = loader.querySelector('.circular-progress-loader-label-default');
        expect(labelContainer).toHaveTextContent(props.value.toString());
        props.value += Math.round(Math.random() * 100);
        waitFor(() => {
            expect(labelContainer).toHaveTextContent(props.value.toString());
        })
    })
    test('Accept proper percentage css value', async () => {
        props.value += Math.round(Math.random() * 100);
        const expectedPercentage = Math.round((props.value / props.max) * 100)
        waitFor(() => {
            expect(loader.style.getPropertyValue('--percentage')).toBe(expectedPercentage);
        });
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
    test('Hides progress text node if default slot appears', async () => {
        const text = 'Block node';
        const { container } = render(CircularProgressLoader, { 
            slots: {
                default: `
                    <div>${text}</div>
                `
            }, 
            props
        });
        expect(container.firstChild).toHaveTextContent(text);
        expect(container.firstChild).not.toHaveTextContent(props.value.toString());
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