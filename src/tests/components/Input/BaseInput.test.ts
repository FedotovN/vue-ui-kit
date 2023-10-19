import BaseInputProps from "@/types/props/Input/BaseInputProps";
import BaseInput from "../../../components/Input/BaseInput/BaseInput.vue";
import testWidth from "../../../tests/utils/testWidth";
import testColor from "../../../tests/utils/testColor";
import create from "../../../tests/utils/create";
import "@testing-library/jest-dom";
describe("Dynamic styles", () => {
    describe("Changes color", () => {
        it("Active color", () => testColor(BaseInput, 'activeColor', '--active-color'));
        it("Error color", () => testColor(BaseInput, 'errorColor', '--error-color'));
    });
    it("Changes width", () => testWidth(BaseInput));
});
describe("Default behaviour", () => {
    it.todo("Works with v-model");
    it("Changes value", async () => {
        const values = ['1', '2', '3', 'abc', 'def'];
        const { mounted, rerender } = create<BaseInputProps>(BaseInput);
        for(let value of values) {
            await rerender({ value });
            const input = mounted.querySelector('input');
            expect(input).toHaveValue(value);
        }
    });
    it("Accepts outer attibutes", () => {
        const attrs = {
            role: "Show text",
            title: "Title"   
          }
          const { mounted } = create(BaseInput, { attrs });
          Object.keys(attrs).forEach(key => {
            expect(mounted).toHaveAttribute(key, attrs[key]);
          });
    });
});