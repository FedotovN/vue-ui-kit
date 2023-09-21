import { IColors } from "@/types/colors";
import CheckboxState from "./CheckboxValue";
export default interface BaseCheckboxProps {
    color?: keyof IColors,
    modelValue?: CheckboxState | number,
    neutralCondition?: boolean,
}