import CircularProgressLoader from "./CircularProgressLoader.vue";
import CircularProgressLoaderProps from "@/types/props/Loader/CircularProgressLoaderProps"
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/vue";
import { nextTick } from "vue";
describe('Circular Progress Loader', () => {
    let defaultProps: CircularProgressLoaderProps;
    beforeAll(() => {
        defaultProps = {
            value: 0,
            color: 'primary',
            max: 100,
            min: 0,
            showProgress: true,
        };
    })
    test('Renders proper progress text node', async () => {
        const props = { ...defaultProps };
        const { container } = render(CircularProgressLoader, { props });
        const loader = container.firstChild;
        const labelContainer = loader.querySelector('.circular-progress-loader-label-default');
        expect(labelContainer).toHaveTextContent(props.value.toString());
        props.value += Math.round(Math.random() * 100);
        waitFor(() => {
            expect(labelContainer).toHaveTextContent(props.value.toString());
        })
    })
    test('Changes CSS classes', async () => {
        // TODO
    })
    test('Dynamicly changes color', async () => {
        // TODO
    })
    test('Corner case: value too high', async () => {
        // TODO
    })
    test('Corner case: value too low', async () => {
        // TODO
    })
})