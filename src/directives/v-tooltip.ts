import { DirectiveBinding, Directive } from "vue"
import { Props, Instance } from "tippy.js";
import tippy from "tippy.js"
let instance: Instance<Props> | null = null;
export default {
    mounted(element, { value }: DirectiveBinding) {
        instance = tippy(element, { content: value })[0];
    },
    unmounted() {
        instance.destroy()
    }
} as Directive