import OverlayModal from "@/types/props/Modal/OverlayModal";
import OverlayModalProps from "@/types/props/Modal/OverlayModalProps";
import OverlayModalVue from "./OverlayModal.vue";
import BaseButton from "../../../components/Button/BaseButton/BaseButton.vue";
import { fireEvent, render, screen, waitFor } from "@testing-library/vue";
import '@testing-library/jest-dom';
import useModal from "../../../composables/useModal";
import { nextTick, shallowRef } from "vue";
import { IColors, colors } from "../../../types/colors";
const { add, open } = useModal();
function mount(props: OverlayModalProps = { defaultWidth: '400px', allowHTML: false, color: 'primary' }) {
    const { container, rerender } = render(OverlayModalVue, { props });
    const modal = container.firstChild;
    const body = container.parentElement;
    return { container, modal, body, rerender };
}
function checkSelectorExistance(container, selector: string) {
    expect(container.querySelector(selector)).toBeTruthy()
}
function checkTextContentEquality(container, selector: string, text: string) {
    expect(container.querySelector(selector)).toHaveTextContent(text);
}
async function addAndOpen(info: OverlayModal) {
    add(info);
    open(info.id);
    return nextTick();
}
const getWrapper = body => body.querySelector('.overlay-modal-wrapper');
describe('Modal: Overlay Modal', () => {
    it('Teleports to the body', () => {
        const { body } = mount();
        checkSelectorExistance(body, 'transition-stub');
    });
    it('Renders modal', async () => {
        const { body } =  mount();
        await addAndOpen({ id: '0' });
        checkSelectorExistance(body, '.overlay-modal-wrapper');
    });
    it('Rendering: proper header', async () => {
        const { body } =  mount();
        const header = 'Header';
        await addAndOpen({ id: '1', header });
        checkTextContentEquality(body, '.overlay-modal-header', header);
    });
    it('Rendering: proper content', async () => {
        const { body } =  mount();
        const content = 'Content';
        await addAndOpen({ id: '2', content });
        checkTextContentEquality(body, '.overlay-modal-body', content);
    });
    it('Rendering: custom component', async () => {
        const { body } =  mount();
        await addAndOpen({ id: '3', component: shallowRef(BaseButton) });
        checkSelectorExistance(body, '.button');
    });
    it('Closes on background click', async () => {
        const { body } =  mount();
        await addAndOpen({ id: '4' });
        expect(getWrapper(body)).toBeTruthy();
        await fireEvent.click(getWrapper(body));
        expect(getWrapper(body)).not.toBeTruthy();
    });
    it('Closes on xmark click', async () => {
        const { body } =  mount();
        await addAndOpen({ id: '5' });
        expect(getWrapper(body)).toBeTruthy();
        await fireEvent.click(body.querySelector('svg'));
        expect(getWrapper(body)).not.toBeTruthy();
    });
    it('Changes color', async () => {
        const props: OverlayModalProps = { color: 'primary' }
        const { body, rerender } =  mount(props);
        await addAndOpen({ id: '6' });
        function checkColor(colorKey: keyof IColors, component): boolean {
            const resulted = component.style.getPropertyValue('--accent-color');
            const expected = colors[colorKey].join(', ');
            return resulted === expected;
        }
        const component = getWrapper(body);
        for(let color in colors) {
            props.color = color as keyof IColors;
            await rerender(props);
            expect(checkColor(color as keyof IColors, component)).toBeTruthy();
        }    
    });
    it('Changes width', async () => {
        const props: OverlayModalProps = { defaultWidth: '200px' }
        const { body, rerender } =  mount(props);
        await addAndOpen({ id: '7' });
        function checkWidth(component, width?: string,): boolean {
            const resulted = component.style.getPropertyValue('--force-width');
            const expected = width;
            return resulted === expected;
        }
        const component = getWrapper(body);
        const arr = ['100px', '200px', '300px', '400px'];
        for(let index in arr) {
            props.defaultWidth = arr[index];
            await rerender(props);
            expect(checkWidth(component, arr[index])).toBeTruthy();
        }    
    });
}); 