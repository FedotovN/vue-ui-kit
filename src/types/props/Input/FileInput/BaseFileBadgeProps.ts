import { FileDisplay } from "@/types/file";
import { IColors } from "@/types/colors";
export default interface BaseFileBageProps {
  value?: FileDisplay;
  toDownload?: File;
  allowDelete?: boolean;
  allowDownload?: boolean;
  color?: keyof IColors;
}
