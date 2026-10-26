import { useState } from "react";
import DataInputPane from "./DataInputPane";
import TabButton from "./TabButton";
import StatusBadge from "./StatusBadge";

export default function DataUploadSection() {
  const [activeTab, setActiveTab] = useState("followers");

  return (
    <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold tracking-wide text-emerald-400 flex items-center gap-2">
          <span>Input de Dados</span>
        </h2>
        <span className="text-xs text-neutral-500">
          Formato: .JSON ou Texto
        </span>
      </div>

      <div className="flex gap-2 mb-4 border-b border-neutral-800 pb-2">
        <TabButton
          active={activeTab === "followers"}
          onClick={() => setActiveTab("followers")}
        >
          Seguidores
        </TabButton>
        <TabButton
          active={activeTab === "following"}
          onClick={() => setActiveTab("following")}
        >
          Seguindo
        </TabButton>
      </div>

      <DataInputPane activeTab={activeTab} />

      <div className="flex gap-2 pt-4">
        <StatusBadge type="followers" />
        <StatusBadge type="following" />
      </div>
    </section>
  );
}
