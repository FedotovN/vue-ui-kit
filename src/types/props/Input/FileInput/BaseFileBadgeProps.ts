import { FileDisplay } from "@/types/file";
export default interface BaseFileBageProps {
    value?: FileDisplay,
    toDownload?: File,
    allowDelete?: boolean,
    allowDownload?: boolean,
}