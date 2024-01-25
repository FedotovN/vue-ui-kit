import { Color, IColors } from '@/types/colors';

export default interface BaseRadioProps {
  color: keyof IColors | Color;
  name?: string;
  id?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
}
