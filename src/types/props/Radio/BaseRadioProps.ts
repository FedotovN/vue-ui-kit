import { Color, IColors } from "@/types/colors";

export default interface BaseRadioProps {
  color: keyof IColors | Color;
  value?: boolean;
  modelValue?: boolean;
  name?: string;
  label?: string;
  uniqueName?: string;
  disabled?: boolean;
}
