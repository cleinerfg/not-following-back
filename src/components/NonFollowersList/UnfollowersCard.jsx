import { useData } from "../../context/useData";
import UnfollowerItem from "./UnfollowerItem";

export default function UnfollowersCard() {
  const { stats } = useData();

  const hasItems = stats.notFollowingBack.length > 0;

  return (
    <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-xl flex-1 flex flex-col">
      <div className="border-b border-neutral-800 pb-4 mb-6 text-center">
        <h2 className="text-xl font-bold text-emerald-400 tracking-wide">
          Não Seguem de Volta
        </h2>
      </div>

      {!hasItems ? (
        <div className="text-center py-12 text-neutral-500 text-sm">
          Nenhum dado importado no momento.
        </div>
      ) : (
        <ul className="divide-y divide-neutral-800 max-h-80 overflow-y-auto pr-1">
          {stats.notFollowingBack.map((username, index) => (
            <UnfollowerItem key={`${username}-${index}`} username={username} />
          ))}
        </ul>
      )}
    </section>
  );
}
