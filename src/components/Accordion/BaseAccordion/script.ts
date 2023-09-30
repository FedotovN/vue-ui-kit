import { VNode, ComponentInternalInstance } from "vue";
import AccordionItem from "@/types/props/Accordion/AccordionItem";

function getAccordionItemsFromSlot(vNodes: VNode[]) {
    const items: AccordionItem[] = vNodes
        .filter(vNode => (vNode as unknown as ComponentInternalInstance ).type.__name === 'AccordionItem')
        .map(vNode => {
            const props: AccordionItem = vNode.props as AccordionItem;
            return {
                opened: props?.opened || false,
                id: props.id
            }
        })
    return items;
};
export { getAccordionItemsFromSlot };