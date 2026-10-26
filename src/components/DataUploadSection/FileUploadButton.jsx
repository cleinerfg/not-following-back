import UploadIcon from "../../assets/upload.svg?react";

export default function FileUploadButton({ onFileUpload }) {
  return (
    <label className="flex items-center gap-1.5 text-xs text-emerald-400 cursor-pointer hover:text-emerald-300 transition-colors">
      <UploadIcon className="w-4 h-4 fill-current" />
      <span>Carregar arquivo</span>
      <input
        type="file"
        accept=".json,.txt"
        className="hidden"
        onChange={onFileUpload}
      />
    </label>
  );
}
