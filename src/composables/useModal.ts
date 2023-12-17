import { shallowRef } from 'vue';
import OverlayModal from '@/types/props/Modal/OverlayModal';
const modal = shallowRef<OverlayModal | null>(null);
export default function useModal() {
    const modals = shallowRef<OverlayModal[]>([]);
    function add(data: OverlayModal) {
        modals.value.push(data);
    }
    function get(id) {
        return modals.value.find(modal => modal.id === id);
    }
    function open(modalData: Partial<OverlayModal> & { id: string }) {
        modal.value = get(modalData.id);
        Object.keys(modalData).forEach(k => {
            if (k === 'id') return;
            modal.value[k] = modalData[k];
        })
    }
    function close() {
        const { onClose } = modal.value;
        modal.value = null;
        if (onClose) onClose();
    }
    return { open, get, add, close, modal }
}