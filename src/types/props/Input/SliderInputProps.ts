import { Color, IColors } from "@/types/colors";
export default interface SliderInputProps {
  min?: number | string;
  max?: number | string;
  limit?: number | string;
  minimum?: number | string;
  step?: number | string;
  modelValue?: number | string;
  value?: number | string;
  color?: keyof IColors | Color;
  width?: string;
}
