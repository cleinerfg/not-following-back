export default function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
        active
          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
          : "text-neutral-400 hover:text-neutral-200 bg-neutral-800/50"
      }`}
    >
      {children}
    </button>
  );
}
