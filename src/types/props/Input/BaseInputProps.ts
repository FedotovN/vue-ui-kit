import { IColors } from "@/types/colors";

export default interface BaseInputProps {
    value?: string,
    placeholder?: string,
    description?: string,
    errorMessage?: string,
    activeColor?: keyof IColors,
    errorColor?: keyof IColors,
    successColor?: keyof IColors,
    width?: string,
}