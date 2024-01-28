import { Color, IColors } from '@/types/colors';

export default interface TextInputProps {
  modelValue?: string | number;
  value?: string | number;
  label?: string | number;
  errorMessage?: string;
  errorWrap?: boolean;
  placeholder?: string | number;
  color?: keyof IColors | Color;
  unstyled?: boolean;
  disabled?: boolean;
  width?: string;
  dynamicLabel?: boolean;
  required?: boolean;
  autocomplete?: string;
}
