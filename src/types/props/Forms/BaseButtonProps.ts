import size from '@/types/size';
import { Color, IColors } from '../../colors';
export default interface BaseButtonProps {
  outlined?: boolean;
  rounded?: boolean;
  raised?: boolean;
  text?: boolean;
  width?: string;
  disabled?: boolean;
  size?: size;
  color?: keyof IColors | Color;
}
