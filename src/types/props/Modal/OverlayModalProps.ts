import { IColors } from "@/types/colors";

export default interface OverlayModalProps {
  color?: keyof IColors;
  allowHTML?: boolean;
  defaultWidth?: string;
}
