import { IColors } from "@/types/colors";

export default interface FileInputProps {
    acceptMime?: string,
    disabled?: boolean,
    multiple?: boolean,
    color?: keyof IColors
}