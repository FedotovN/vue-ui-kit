import { Color, IColors } from "@/types/colors";

export default interface BaseCheckboxProps {
  color: keyof IColors | Color;
  modelValue?: boolean;
  value?: boolean;
  label?: string;
}
