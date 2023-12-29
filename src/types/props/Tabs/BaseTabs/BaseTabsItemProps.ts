import { IColors } from "@/types/colors";

export default interface BaseTabsItemProps {
  id: string | number;
  title?: string;
  color?: keyof IColors;
  disabled?: boolean;
}
