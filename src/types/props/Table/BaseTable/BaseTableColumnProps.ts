export default interface BaseTableColumnProps {
    field: string,
    title?: string,
    valueCallback?: (item: object) => any;
}