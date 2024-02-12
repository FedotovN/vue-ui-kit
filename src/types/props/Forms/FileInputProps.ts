import { IColors } from '@/types/colors';

export default interface FileInputProps {
  accept?: string;
  disabled?: boolean;
  multiple?: boolean;
  color?: keyof IColors;
}
