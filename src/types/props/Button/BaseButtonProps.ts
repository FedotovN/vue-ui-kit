import { Color, IColors } from "../../colors";
export default interface BaseButtonProps {
  outlined?: boolean;
  rounded?: boolean;
  raised?: boolean;
  flat?: boolean;
  width?: string;
  color?: keyof IColors | Color;
}
