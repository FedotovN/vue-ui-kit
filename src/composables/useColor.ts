import { IColors, Color, colors } from "../types/colors";
import { reactive } from "vue";
const CSSOMColorPrefix = "--k-color";
Object.keys(colors).forEach((key: keyof IColors) => {
  setColorToCSSOM(key, colors[key]);
});
function setColorToCSSOM(key: keyof IColors, value: Color) {
  const [red, green, blue] = value;
  document.body.style.setProperty(
    `${CSSOMColorPrefix}-${key}`,
    `${red}, ${green}, ${blue}`,
  );
}
function getCSSPropertyFromColor(color: keyof IColors | Color): string {
  if (typeof color === "string") return `var(${CSSOMColorPrefix}-${color})`;
  const [red, green, blue] = color;
  return `${red}, ${green}, ${blue}`;
}
export default function useColor() {
  const defaultColors = reactive<IColors>(colors);
  const set = (value: Color, key: keyof IColors) => {
    defaultColors[key] = value;
    setColorToCSSOM(key, value);
  };
  const get = (key: keyof IColors | Color) => getCSSPropertyFromColor(key);
  return { set, get };
}
