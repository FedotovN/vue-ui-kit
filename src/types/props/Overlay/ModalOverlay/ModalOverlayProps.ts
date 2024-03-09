import { IColors } from "@/types/colors";
import { Transitions } from "@/types/transitions";
export default interface ModalOverlayProps {
  color?: keyof IColors,
  allowHTML?: boolean,
  defaultWidth?: string,
  transitionName?: Transitions | string,
}
