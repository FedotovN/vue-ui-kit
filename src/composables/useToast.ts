import { Toast, ToastData } from "@/types/toast";
import { ref } from "vue";

const toasts = ref<Toast[]>([]);
export default function useToast() {
    function add(info: ToastData) {
        const id = Math.random();
        toasts.value.push({ ...info, id });
        setTimeout(() => remove(id), info.delay);
    }
    function remove(id) {
        toasts.value = toasts.value.filter(toast => toast.id !== id);
    }
    return { toasts, add, remove };
}