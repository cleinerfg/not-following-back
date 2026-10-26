export default function StatCard({ label, value, highlight = false }) {
  return (
    <div
      className={`bg-neutral-900 border p-4 rounded-xl ${
        highlight ? "border-emerald-500/50 border-2" : "border-neutral-800"
      }`}
    >
      <p className="text-xs text-neutral-400 font-medium">{label}</p>
      <p
        className={`text-2xl font-bold mt-1 ${
          highlight ? "text-emerald-400" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
