import { ref } from 'vue';
import OverlayModal from '@/types/props/Modal/OverlayModal';
const modal = ref<OverlayModal | null>(null);
export default function useModal() {
    const modals = ref<OverlayModal[]>([]);
    function add(data: OverlayModal) {
        modals.value.push(data);
    }
    function get(id) {
        return modals.value.find(modal => modal.id === id);
    }
    function open(data: OverlayModal) {
        const targetModal = data;
        modal.value = targetModal;
    }
    function close() {
        modal.value = null;
    }
    return { open, get, add, close, modal }
}