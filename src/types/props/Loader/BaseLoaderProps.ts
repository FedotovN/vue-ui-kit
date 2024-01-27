import { IColors } from '../../../types/colors';

export default interface BaseLoaderProps {
  color?: keyof IColors;
  size?: string;
  borderWidth?: string;
  label?: string;
  finished?: boolean;
}
