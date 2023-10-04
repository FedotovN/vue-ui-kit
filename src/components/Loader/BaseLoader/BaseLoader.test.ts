import {render, screen, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom"
import BaseLoader from "./BaseLoader.vue";
import BaseLoaderProps from "@/types/props/Loader/BaseLoaderProps";
import useColor from "../../../composables/useColor";
const { getColor } = useColor();
let defaultProps: BaseLoaderProps = {
    color: 'primary',
    borderWidth: '1px',
    size: '25px',
    label: 'Loading',
};
function create(props = defaultProps,) {
    const { container } = render(BaseLoader, { props });
    const loader = container.firstChild as HTMLElement;
    return { loader, container }
}
describe('Loader: Base Loader', () => {
    it('Renders label', () => {
        const { loader } = create();
        expect(loader).toHaveTextContent(defaultProps.label);
    });
    it('Changes color', () => {
        const props: BaseLoaderProps = { color: 'primary' }
        const { loader } = create(props);
        expect(loader).toHaveStyle({ '--accent-color':  getColor(props.color).join(', ')})
        props.color = "alert"
        waitFor(() => {
            expect(loader).toHaveStyle({ '--accent-color':  getColor(props.color).join(', ')})
        })
    });
});