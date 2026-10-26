export default function UnfollowerItem({ username }) {
  return (
    <li className="py-3 px-2 flex items-center justify-between hover:bg-neutral-800/50 rounded-lg transition-colors">
      <span className="text-sm text-neutral-200 font-medium">@{username}</span>
    </li>
  );
}
