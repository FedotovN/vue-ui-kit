import { IColors } from "@/types/colors";

export default interface BaseAccordionProps {
  multiple?: boolean;
  color?: keyof IColors;
  width?: string;
}
