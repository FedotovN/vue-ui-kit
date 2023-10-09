import { App } from "vue";
import components from "@/components";
export default {
    install(app: App) {
        for (let name in components) {
            app.component(name, components[name]);
        }
    }
}