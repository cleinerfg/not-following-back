import { useData } from "../../context/useData";
import FileUploadButton from "./FileUploadButton";

export default function DataInputPane({ activeTab }) {
  const { data, updateDataAndValidation } = useData();

  const label = activeTab === "following" ? "seguindo" : "seguidores";

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      updateDataAndValidation(activeTab, event.target.result);
    };
    reader.readAsText(file);
  };

  const handleTextChange = (e) => {
    updateDataAndValidation(activeTab, e.target.value);
  };

  const handleClear = () => {
    updateDataAndValidation(activeTab, "");
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center mb-1">
        <label className="text-xs text-neutral-400">
          Cole o JSON de {label}:
        </label>
        <FileUploadButton onFileUpload={handleFileUpload} />
      </div>

      <div className="relative">
        <textarea
          value={data[activeTab]}
          onChange={handleTextChange}
          placeholder={"Cole o JSON de " + label + " aqui..."}
          className="w-full h-32 bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-sm text-neutral-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none font-mono"
        />

        {data[activeTab] && (
          <button
            onClick={handleClear}
            type="button"
            className="absolute bottom-3 right-3 text-xs text-red-400 hover:text-red-300 bg-neutral-900/90 hover:bg-neutral-850 px-2 py-1 rounded transition-colors shadow-sm"
          >
            Limpar
          </button>
        )}
      </div>
    </div>
  );
}
