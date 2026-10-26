import StatCard from "./StatCard";

export default function StatsOverview({
  notFollowingBackCount = 0,
  followersCount = 0,
  followingCount = 0,
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        label="Não Segue de Volta"
        value={notFollowingBackCount}
        highlight
      />
      <StatCard label="Seguidores" value={followersCount} />
      <StatCard label="Seguindo" value={followingCount} />
    </section>
  );
}
