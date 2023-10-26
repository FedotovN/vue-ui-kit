import { RenderOptions, render } from "@testing-library/vue";
interface Options<T> extends RenderOptions {
    props?: T,
}
export default function create<T>(component, opt?: Options<T>){
    const { container, rerender, emitted } = render(component, opt);
    const mounted = container.firstChild as HTMLElement;
    const body = container.parentElement
    return { mounted, container, body, rerender, emitted };
}