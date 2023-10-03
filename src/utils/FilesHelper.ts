import { FileDisplay } from "@/types/file";
function getFileFromInput(event: Event): FileDisplay{
    const input = event.target as HTMLInputElement;
    const list = input.files;
    if (!list) return;
    const element = list[0];
    const mime = element.type.split('/')[1] || 'UNK';
    const format = `.${element.name.split('.')[element.name.split('.').length - 1].toUpperCase()}`;
    const kbSize = `${((element.size / 1024).toFixed(1) || '??')} KB`
    const name = element.name || 'File';
    return { mime, kbSize, name, format, toDownload: element };
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