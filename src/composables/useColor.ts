import { IColors, Color, colors } from "../types/colors";
import { reactive } from "vue";
export default function useColor() {
  const defaultColors = reactive<IColors>(colors);
  const set = (value: Color, key: keyof IColors) =>
    (defaultColors[key] = value);
  const get = (key: keyof IColors) => defaultColors[key];
  return { set, get };
}
