import { IColors } from '../../colors';

export default interface SpinnerLoaderProps {
  color?: keyof IColors;
  size?: string;
  borderWidth?: string;
  label?: string;
  finished?: boolean;
}
