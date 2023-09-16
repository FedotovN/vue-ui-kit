import { IColors, Color,  colors } from "../types/colors";
import { reactive } from "vue";
export default function useColor() {
    const defaultColors  = reactive<IColors>(colors);
    const setColor = (value: Color, key: keyof IColors) => defaultColors[key] = value;
    const getColor = (key: keyof IColors) => defaultColors[key];
    return { setColor, getColor };
}