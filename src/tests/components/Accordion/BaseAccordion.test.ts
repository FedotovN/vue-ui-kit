import BaseAccordion from "../../../components/Accordion/BaseAccordion/BaseAccordion.vue";
import AccordionItem from "../../../components/Accordion/BaseAccordion/AccordionItem/AccordionItem.vue";
import create from "../../../tests/utils/create";
import "@testing-library/jest-dom";
import { fireEvent, getAllByTestId, getAllByText } from "@testing-library/vue";
import { h } from "vue";
import testColor from "../../../tests/utils/testColor";
import testWidth from "../../../tests/utils/testWidth";
function renderWithChildNodes(props?) {
    const getChildProps = id => ({ opened: false, id, title: 'Accordion Item' }) ;
    const getItem = (func, id) => {
        const props = getChildProps(id);
        return h(AccordionItem as unknown as string, { ...props, onClick: () => func(props.id) } );
    }
    const slots = { 
        default: ({ toggleItem = () => {} }) => [getItem(toggleItem, 1), getItem(toggleItem, 2), getItem(toggleItem, 3)],
    };
    const { mounted, rerender } = create(BaseAccordion, { slots, props });
    return { mounted, getChildProps, slots, rerender }
}
describe('Dynamic styles', () => {
    it('Changes item color', () => testColor(AccordionItem));
    it('Changes width', () => testWidth(BaseAccordion));
});
describe("Default behaviour", () => {
    it('Renders proper labels', () => {
        const { mounted, getChildProps, slots } = renderWithChildNodes();
        const labels = getAllByText(mounted, getChildProps(1).title);
        expect(labels).toHaveLength(slots.default({}).length);
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
    it('Opening and autoclose items', async () => {
        const { mounted } = renderWithChildNodes({ multiple: false });
        const items = getAllByTestId(mounted, 'base-accordion-item');
        for (let i = 0; i < items.length; i++) {
            await fireEvent.click(items[i]);
            expect(items[i]).toHaveClass('opened');
            for (let j = 0; j < items.length; j++) {
                if (j === i) continue;
                expect(items[j]).toHaveClass('closed');
            }
        }
    });
    it('Closing and opening items', async () => {
        const { mounted } = renderWithChildNodes();
        const items = getAllByTestId(mounted, 'base-accordion-item');
        for (let i = 0; i < items.length; i++) {
            await fireEvent.click(items[i]);
            expect(items[i]).toHaveClass('opened');
        }
        for (let i = 0; i < items.length; i++) {
            await fireEvent.click(items[i]);
            expect(items[i]).toHaveClass('closed');
        }
    });
})