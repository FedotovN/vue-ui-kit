import { queryByTestId } from "@testing-library/vue";
import "@testing-library/jest-dom";
import BaseCheckbox from "../../../components/Checkbox/BaseCheckbox/BaseCheckbox.vue";
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
    it('Changes color', () => testColor(BaseCheckbox));
});