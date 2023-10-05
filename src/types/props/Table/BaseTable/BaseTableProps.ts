import { IColors } from "@/types/colors";
export default interface BaseTableProps {
    items?: object[],
    color?: keyof IColors,
}