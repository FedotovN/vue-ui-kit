import { App } from "vue";
import UIModules from "../components";
import directives from "../directives";
export default {
    install(app: App) {
        for (let title in UIModules) {
            const components = UIModules[title]
            for (let name in components) {
                app.component(name, components[name]);
            }
        }
        for (let name in directives) {
            app.directive(name, directives[name]);
        }
    }
}
export * from "../composables";