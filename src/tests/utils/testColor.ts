import { IColors } from "@/types/colors";
import useColor from "../../composables/useColor";
const { getColor } = useColor();
export default function testColor(target: HTMLElement, color: keyof IColors) {
    expect(target).toHaveStyle({
        '--accent-color': getColor(color).join(', ')
    });
}