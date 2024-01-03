import { Color, IColors } from "@/types/colors";
export default interface RangeInputProps {
  min?: number;
  max?: number;
  step?: number;
  modelValue?: number;
  value?: number;
  color?: keyof IColors | Color;
  width?: string;
}
