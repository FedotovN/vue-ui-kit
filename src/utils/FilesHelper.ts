import { FileDisplay } from "@/types/file";
function getFileFromInput(event: Event, multiple: boolean): FileDisplay | FileDisplay[] {
    let result: FileDisplay | FileDisplay[];
    const input = event.target as HTMLInputElement;
    const list = input.files;
    if (!list) return;
    const extracted = multiple ? list : list[0];
    const getFileInfo = (file: File): FileDisplay => {
        console.log(file);
        const mime = file.type.split('/')[1] || 'UNK';
        const format = `.${file.name.split('.')[file.name.split('.').length - 1].toUpperCase()}`;
        const kbSize = `${((file.size / 1024).toFixed(1) || '??')} KB`
        const name = file.name || 'File';
        return { mime, kbSize, name, format, toDownload: file };
    }
    if (multiple) return ([...extracted as unknown as Array<File>]).map<FileDisplay>(file => getFileInfo(file));
    else return getFileInfo(extracted as File);
}
function downloadLocalFile(blob, name) {
    const a = document.createElement('a');
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = name || 'File';
    a.click();
    a.remove();
};
export { getFileFromInput, downloadLocalFile };