import { IColors } from "@/types/colors";
export default interface BaseCheckboxProps {
    outlined?: boolean,
    size?: string,
    color?: keyof IColors,
    modelValue?: boolean,
    rounded?: boolean,
}