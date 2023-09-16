import { IColors } from "../../colors";

export default interface CircularProgressLoaderProps {
    color?: keyof IColors,
    height?: string,
    width?: string,
    value?: number,
    max?: number,
    min?: number,
    strokeWidth?: string,
    rounded?: boolean,
    radius?: number,
    showProgress?: boolean,
}