import { IColors } from '../../colors';

export default interface ProgressBarProps {
  value?: number;
  max?: number;
  min?: number;
  color?: keyof IColors;
  width?: string;
  height?: string;
  outlined?: boolean;
  showProgress?: boolean;
  flat?: boolean;
  fill?: boolean;
  large?: boolean;
}
