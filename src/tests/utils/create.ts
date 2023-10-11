import { RenderOptions, render } from "@testing-library/vue";
export default function create(component, opt?: RenderOptions){
    const { container, rerender } = render(component, opt);
    const mounted = container.firstChild as HTMLElement;
    return { mounted, container, rerender };
}