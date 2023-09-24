import { IColors } from "./colors";

interface ToastData {
    content?: string,
    color?: keyof IColors,
    parseHtml?: boolean,
    centerText?: boolean,
    delay?: number,
}
interface Toast extends ToastData {
    id: number,
}
export { ToastData, Toast }