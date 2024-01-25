type Color = [number, number, number];
interface IColors {
  alert: Color;
  primary: Color;
  secondary: Color;
  success: Color;
  warning: Color;
  none: Color;
}
const colors: IColors = {
  alert: [239, 103, 98],
  warning: [209, 132, 44],
  success: [80, 178, 108],
  primary: [66, 153, 225],
  secondary: [134, 74, 240],
  none: [80, 80, 80],
};
export { type IColors, type Color };
export { colors };
