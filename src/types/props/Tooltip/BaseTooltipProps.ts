import { IColors } from "@/types/colors";
import { Props } from "tippy.js";
export default interface BaseTooltipProps extends Partial<Props> {
    color?: keyof IColors,
}