import { Color, IColors } from "@/types/colors";
import size from "@/types/size";
export default interface BaseBadgeProps {
    color?: keyof IColors | Color;
    outlined?: boolean;
    filled?: boolean;
    rounded?: boolean;
    bold?: boolean;
    caps?: boolean;
    size?: size;
}