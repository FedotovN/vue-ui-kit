import { IColors } from "@/types/colors";

export default interface BaseTabsProps {
    color?: keyof IColors,
    width?: string,
    defaultFirst?: boolean,
    defaultTabId?: string | number,
}