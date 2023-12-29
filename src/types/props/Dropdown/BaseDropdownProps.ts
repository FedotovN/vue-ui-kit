import { IColors } from "@/types/colors";

type DropdownItem = {
  id: number | string;
  label?: string;
  value?: any;
  disabled?: boolean;
};
type Alignment = "top" | "bottom" | "left" | "right";
export default interface BaseDropdownProps {
  items?: DropdownItem[];
  color?: keyof IColors;
  modelValue?: DropdownItem;
  alignment?: Alignment;
  width?: string;
}
export { type DropdownItem };
