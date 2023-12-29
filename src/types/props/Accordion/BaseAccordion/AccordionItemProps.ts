import { IColors } from "@/types/colors";

export default interface AccordionItemProps {
  color?: keyof IColors;
  title?: string;
  disabled?: boolean;
}
