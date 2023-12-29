import { IColors } from "@/types/colors";

export default interface RangeInputProps {
  minValue?: number;
  maxValue?: number;
  minimalRange?: number;
  maxRange?: number;
  limit?: number;
  color?: keyof IColors;
  minimum?: number;
  step?: number;
  width?: string;
}
