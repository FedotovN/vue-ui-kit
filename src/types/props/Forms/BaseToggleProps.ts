import { IColors } from "@/types/colors";

export default interface BaseToggleProps {
    modelValue?: boolean,
    value?: boolean,
    color?: keyof IColors,
}