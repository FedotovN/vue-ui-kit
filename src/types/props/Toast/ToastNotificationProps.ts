import { ToastData } from "@/types/toast";

export default interface ToastNotificationProps {
    centerText?: string,
    minWidth: string,
    maxWidth: string,
    toast: ToastData
}