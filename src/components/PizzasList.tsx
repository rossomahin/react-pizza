import { useQuery } from "@tanstack/react-query";
import { fetchPizzas, Pizza } from "../data/pizzasData";
import PizzaBlock from "./PizzaBlock";
import PizzaSkeleton from "./PizzaSkeleton";

function PizzasList({
  category,
  sortType,
}: {
  category: string;
  sortType: string;
}) {
  const { data, isLoading, error } = useQuery<Pizza[]>({
    queryKey: ["pizzas"],
    queryFn: fetchPizzas,
  });

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <PizzaSkeleton key={index} />
        ))}
      </div>
    );
  }
  if (error) return <p>Ошибка</p>;

  let filtered = data ? [...data] : [];

  if (category !== "all") {
    filtered = filtered.filter((p) => p.category.includes(category));
  }

  if (sortType === "price") filtered.sort((a, b) => a.price - b.price);
  if (sortType === "alphabet")
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sortType === "popularity")
    filtered.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

  return (
    <div className="flex flex-wrap justify-center sm:justify-start">
      {filtered.map((pizza) => (
        <PizzaBlock
          key={pizza.id}
          id={pizza.id}
          title={pizza.title}
          price={pizza.price}
          imageUrl={pizza.imageUrl}
        />
      ))}
    </div>
  );
}

export default PizzasList;
