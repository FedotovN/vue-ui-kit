import { ref, shallowRef } from 'vue';
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
    function open(id, props?, emits?) {
        const targetModal = get(id);
        modal.value = targetModal;
        modal.value.props = { ...modal.value.props, ...props };
        modal.value.emits = {  ...modal.value.emits, ...emits };
    }
    function close() {
        modal.value = null;
    }
    return { open, get, add, close, modal }
}