import {IColors} from "@/types/colors";

export default interface BaseFileInputProps {
    acceptMime?: string | string[]
    disabled?: boolean,
    multiple?: boolean,
    color?: keyof IColors
}