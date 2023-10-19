import BaseInput from "../../../components/Input/BaseInput/BaseInput.vue";
import testWidth from "../../../tests/utils/testWidth";
import testColor from "../../../tests/utils/testColor";
describe("Dynamic styles", () => {
    describe("Changes color", () => {
        it("Active color", () => testColor(BaseInput, 'activeColor', '--active-color'));
        it("Error color", () => testColor(BaseInput, 'errorColor', '--error-color'));
    });
    it("Changes width", () => testWidth(BaseInput));
});
describe("Default behaviour", () => {
    it.todo("Changes value");
    it.todo("Works with v-model");
    it.todo("Accepts outer attibutes");
});