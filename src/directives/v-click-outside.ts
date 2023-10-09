import { DirectiveBinding } from "vue"
interface ExpectedBinding extends DirectiveBinding {
    value: () => any;
}
let callback;
export default {
    mounted(el, { value }: ExpectedBinding) {
        callback = value;
        document.addEventListener('click', (event: PointerEvent) => {
            if (!(el === event.target || el.contains(event.target))) 
            callback();
        });
    },
    unmounted() {
        document.removeEventListener('click', callback)
    }
}