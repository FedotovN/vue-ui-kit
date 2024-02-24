import { ListenerType } from "@/types/listeners";
import { HorizontalAlignmentType, VerticalAlignmentType } from "@/types/alignment";

export default interface PopupHelperProps {
  show?: boolean,
  listenerType?: ListenerType,
  delay?: number,
  alignX?: HorizontalAlignmentType,
  alignY?: VerticalAlignmentType,
  offsetX?: string | number,
  offsetY?: string | number,
  screenBoundaryOffset?: string | number,
  zIndex?: string | number,
  keepOnHover?: boolean,
}