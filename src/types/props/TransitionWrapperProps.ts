import { Transitions } from "@/types/transitions";

export default interface TransitionWrapperProps {
  name?: Transitions | string,
  mode?: 'out-in' | 'in-out',
  duration?: number,
  disabled?: boolean,
}
