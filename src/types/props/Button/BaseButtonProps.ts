import { IColors } from "../../colors";
export default interface BaseButtonProps {
  outlined?: boolean;
  rounded?: boolean;
  raised?: boolean;
  flat?: boolean;
  large?: boolean;
  fill?: boolean;
  bold?: boolean;
  caps?: boolean;
  width?: string;
  color?: keyof IColors;
}
