import { IColors } from "@/types/colors";
export default interface BaseTableProps {
  items?: object[];
  itemsPerPage?: number | string;
  movePaginationBarEach?: number | string;
  itemClickCallback?: (item: object) => any;
  showPagination?: boolean;
  showButtons?: boolean;
  showFooter?: boolean;
  width?: string;
  color?: keyof IColors;
}
