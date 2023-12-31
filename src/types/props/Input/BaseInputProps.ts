import { Color, IColors } from "@/types/colors";

export default interface BaseInputProps {
  modelValue?: string | number;
  value?: string | number;
  label?: string | number;
  placeholder?: string | number;
  color?: keyof IColors | Color;
  disabled?: boolean;
  width?: string;
  dynamicLabel?: boolean;
}
