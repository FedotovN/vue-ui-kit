type Color = [number, number, number];
interface IColors {
  alert: Color;
  primary: Color;
  secondary: Color;
  success: Color;
  warning: Color;
  white: Color;
  none: Color;
}
const colors: IColors = {
  alert: [245, 101, 101],
  primary: [66, 153, 225],
  secondary: [77, 69, 241],
  success: [34, 197, 94],
  warning: [249, 115, 22],
  white: [255, 255, 255],
  none: [120, 120, 120],
};
export { type IColors, type Color };
export { colors };
