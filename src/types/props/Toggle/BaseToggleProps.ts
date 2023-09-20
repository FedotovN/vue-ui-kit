import { IColors } from "@/types/colors";

export default interface BaseToggleProps {
    modelValue?: boolean,
    color?: keyof IColors,
    truthyLabel?: string,
    falsyLabel?: string,
    paintLabel?: boolean,
}