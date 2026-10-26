export default function Header() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          <h1 className="text-xl font-bold tracking-tight text-white">
            Não me Segue de <span className="text-emerald-400">Volta</span>
          </h1>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium">
          v1.0.0
        </span>
      </div>
    </header>
  );
}
