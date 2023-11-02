import { IColors } from "@/types/colors";

export default interface BaseTabsProps {
    color?: keyof IColors,
    width?: string,
    height?: string,
    noWrapper?: boolean,
    defaultFirst?: boolean,
    defaultTabId?: string | number,
}