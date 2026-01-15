import { Skeleton } from "@/components/ui/skeleton";

export default function PizzaSkeleton() {
  return (
    <div className="w-60 h-80 p-4 m-2 border rounded-2xl bg-white flex flex-wrap items-center gap-4">
      <Skeleton className="w-40 h-40 rounded-2xl" />
      <Skeleton className="w-32 h-6 rounded" />
      <Skeleton className="w-20 h-6 rounded" />
    </div>
  );
}
