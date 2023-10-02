export default interface AccordionItemProps {
    title?: string,
    opened?: boolean,
}
function isAccordionItemProps(value): value is AccordionItemProps {
    return !!(value?.opened != undefined);
}
export { isAccordionItemProps };