import { useState } from "react";

export default function UnfollowerItem({ username }) {
  const [isRemoved, setIsRemoved] = useState(false);

  return (
    <li className="py-3 px-2 flex gap-1 items-center justify-between hover:bg-neutral-800/50 rounded-lg transition-colors">
      <span
        className={`text-sm font-medium transition-colors ${isRemoved ? "line-through text-neutral-500" : "text-neutral-200"}`}
      >
        {username}
      </span>

      <button
        onClick={() => setIsRemoved(!isRemoved)}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
          isRemoved
            ? "bg-rose-950/40 text-rose-400 border border-rose-900/50 hover:bg-rose-950/60"
            : "bg-neutral-700 text-neutral-200 hover:bg-neutral-600"
        }`}
      >
        {isRemoved ? "Não sou seu Fã" : "Marcar como Removido"}
      </button>
    </li>
  );
}
