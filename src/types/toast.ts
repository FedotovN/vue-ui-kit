import { IColors } from "./colors";

interface ToastData {
    content?: string,
    color?: keyof IColors,
    allowHtml?: boolean,
}
interface Toast extends ToastData {
    id: number,
}
export { ToastData, Toast }