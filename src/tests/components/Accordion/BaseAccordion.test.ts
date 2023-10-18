import BaseAccordion from "../../../components/Accordion/BaseAccordion/BaseAccordion.vue";
import AccordionItem from "../../../components/Accordion/BaseAccordion/AccordionItem/AccordionItem.vue";
import AccordionItemProps from "../../../types/props/Accordion/AccordionItemProps";
import create from "../../../tests/utils/create";
import "@testing-library/jest-dom";
import { getAllByTestId, getAllByText, screen } from "@testing-library/vue";
import { h } from "vue";
function renderWithChildNodes() {
    const childProps = { opened: false, id: Math.random(), title: 'Accordion Item' } as AccordionItemProps ;
    const item = h(AccordionItem as unknown as string, childProps);
    const slots = { 
        default: [item, item, item],
    };
    const { mounted } = create(BaseAccordion, { slots });
    return { mounted, childProps, slots }
}
describe('Dynamic styles', () => {
    it.todo('Changes item color');
    it.todo('Changes width');
});
describe("Default behaviour", () => {
    it('Renders proper labels', () => {
        const { mounted, childProps, slots } = renderWithChildNodes();
        const labels = getAllByText(mounted, childProps.title);
        expect(labels).toHaveLength(slots.default.length);
    });
    it('Items are closed by default', () => {
        const { mounted } = renderWithChildNodes();
        const items = getAllByTestId(mounted, 'base-accordion-item');
        items.forEach(item => {
            expect(item).toHaveClass('closed');
        })
    });
})
describe("Closing and opening", () => {
    it('Opening and autoclose items', () => {
        const { mounted } = renderWithChildNodes();
        const items = getAllByTestId(mounted, 'base-accordion-item');
        items.forEach(item => {
            expect(item).toHaveClass('closed');
        })
    });
    it('Closing and opening items', () => {
        const { mounted } = renderWithChildNodes();
        const items = getAllByTestId(mounted, 'base-accordion-item');
        items.forEach(item => {
            expect(item).toHaveClass('closed');
        })
    });
})