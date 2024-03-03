import { ListenerType } from "@/types/props/Overlay/PopupHelper/listeners";
import { HorizontalAlignmentType, VerticalAlignmentType } from "@/types/alignment";
import { IColors } from "@/types/colors";

export default interface BaseDropdownProps {
  modelValue?: object,
  value?: object,
  options?: object[],
  label?: string,
  labelProperty?: string,
  keepOnSelect?: boolean,
  listenerType?: ListenerType,
  alignX?: HorizontalAlignmentType,
  alignY?: VerticalAlignmentType,
  width?: string,
  color?: keyof IColors,
}
