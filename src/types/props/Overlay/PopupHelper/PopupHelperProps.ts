import { ListenerType } from "@/types/props/Overlay/PopupHelper/listeners";
import { HorizontalAlignmentType, VerticalAlignmentType } from "@/types/alignment";

export default interface PopupHelperProps {
  show?: boolean,
  listenerType?: ListenerType,
  delay?: [number, number],
  alignX?: HorizontalAlignmentType,
  alignY?: VerticalAlignmentType,
  offsetX?: string | number,
  offsetY?: string | number,
  screenBoundaryOffset?: string | number,
  zIndex?: string | number,
  interactive?: boolean,
  chain?: boolean,
  teleportTo?: string,
  dontTeleport?: boolean,
}
