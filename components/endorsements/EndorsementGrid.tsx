import { EndorsementCard } from "./EndorsementCard";

type Endorsement = {
  jurisdiction: string;
  title: string;
  name: string;
  photo: string | null;
  quote?: string;
};

export function EndorsementGrid({
  items,
  columns = 3,
}: {
  items: Endorsement[];
  columns?: 3 | 4;
}) {
  const gridCols = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 gap-5 ${gridCols}`}>
      {items.map((item) => (
        <EndorsementCard key={item.name} endorsement={item} />
      ))}
    </div>
  );
}
