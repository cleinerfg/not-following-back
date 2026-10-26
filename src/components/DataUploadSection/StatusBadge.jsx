import CheckIcon from "../../assets/check-circle.svg?react";
import FailIcon from "../../assets/fail-circle.svg?react";
import { useData } from "../../context/useData";

const STATUS_CONFIG = {
  waiting: {
    container: "bg-neutral-500/5 border-neutral-500/20 text-neutral-500",
    text: "Aguardando dados",
    textStyle: "text-neutral-500 italic",
    icon: null,
  },
  valid: {
    container: "bg-emerald-500/5 border-emerald-500/20",
    text: "Válido",
    textStyle: "text-emerald-400 font-semibold",
    icon: <CheckIcon className="w-4 h-4 text-emerald-400 fill-current" />,
  },
  invalid: {
    container: "bg-rose-500/5 border-rose-500/20",
    text: "Inválido",
    textStyle: "text-rose-400 font-semibold",
    icon: <FailIcon className="w-4 h-4 text-rose-400 fill-current" />,
  },
};

export default function StatusBadge({ type }) {
  const { dataIsValid } = useData();
  const label = type === "followers" ? "Seguidores" : "Seguindo";

  const config =
    dataIsValid[type] === null
      ? "waiting"
      : dataIsValid[type]
        ? "valid"
        : "invalid";
  const currentStatus = STATUS_CONFIG[config] || STATUS_CONFIG.waiting;

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-1 p-3 rounded-lg border text-xs transition-colors ${currentStatus.container}`}
    >
      <span className="text-neutral-400 font-medium">{label}:</span>

      <div className="flex items-center gap-1.5">
        <span className={currentStatus.textStyle}>{currentStatus.text}</span>
        {currentStatus.icon}
      </div>
    </div>
  );
}
