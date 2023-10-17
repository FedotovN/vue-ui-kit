import { queryByTestId } from "@testing-library/vue";
import "@testing-library/jest-dom";
import BaseCheckbox from "./BaseCheckbox.vue";
import BaseCheckboxProps from "@/types/props/Checkbox/BaseCheckboxProps";
import testColor from "../../utils/testColor";
import create from "../../utils/create";

describe('Checkbox: Base Checkbox', () => {
    it('Renders proper state', async () => {
        const props = { modelValue: false };
        const { mounted, rerender } = create(BaseCheckbox, { props });
        expect(queryByTestId(mounted, "active-svg")).toBeFalsy();
        props.modelValue = true;
        await rerender(props);
        expect(queryByTestId(mounted, "active-svg")).toBeTruthy();
    });
    it('Changes color', async () => {
        let props: BaseCheckboxProps = { color: 'primary' };
        const { mounted, rerender } = create(BaseCheckbox, { props });
        testColor(mounted, props.color);
        props.color = 'alert'
        await rerender(props);
        testColor(mounted, props.color);
    });
});