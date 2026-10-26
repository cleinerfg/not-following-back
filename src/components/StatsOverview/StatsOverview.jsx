import { useData } from "../../context/useData";
import StatCard from "./StatCard";

export default function StatsOverview() {
  const { stats } = useData();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        label="Não Segue de Volta"
        value={stats.notFollowingBack.length}
        highlight
      />
      <StatCard label="Seguidores" value={stats.followers.length} />
      <StatCard label="Seguindo" value={stats.following.length} />
    </section>
  );
}
