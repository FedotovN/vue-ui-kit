import { computed, nextTick, shallowRef } from "vue";
import OverlayModalOptions from '@/types/props/Overlay/ModalOverlay/OverlayModalOptions';

const modals = shallowRef<OverlayModalOptions[]>([]);
const modal= shallowRef<OverlayModalOptions | null>();
export default function useModal() {
  function add(data: OverlayModalOptions) {
    if (get(data.id)) {
      console.warn(`useModal.ts: modal with id ${data.id} is already added`);
      return;
    }
    modals.value = [...modals.value, data];
  }
  function get(id: string) {
    return modals.value.find(modal => modal.id === id);
  }
  function open(id: string) {
    const found = get(id);
    if (!found) {
      console.error(`useModal.ts: no modal with id '${id}' found.`);
      return;
    }
    modal.value = found;
  }
  function close() {
    const { onClose } = modal.value;
    modal.value = null;
    if (onClose) onClose();
  }
  return { open, add, close, modal, modals }
}
