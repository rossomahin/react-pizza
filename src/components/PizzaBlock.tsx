import { usePizzaStore } from "../store/pizzaStore";
import { doughTypes } from "../data/pizzaOptions";
import { crustSizes } from "../data/pizzaOptions";
import { useState } from "react";

interface PizzaBlockProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

function PizzaBlock({ id, title, price, imageUrl }: PizzaBlockProps) {
  const [isActiveType, setIsActiveType] = useState(0);
  const [isActiveCrust, setIsActiveCrust] = useState(0);
  const key = `${id}_${doughTypes[isActiveType]}_${crustSizes[isActiveCrust]}`;
  const pizzaCount = usePizzaStore((state) => state.pizzas[key]?.count || 0);
  const addPizza = usePizzaStore((state) => state.addPizza);

  return (
    <div className="w-80 min-h-112.5 p-4">
      <img className="w-60 mx-auto" src={imageUrl} alt={title} />
      <p className="font-extrabold text-center text-2xl py-2">{title}</p>
      <div className="border border-gray-200 rounded-2xl">
        <div className="flex gap-2">
          {doughTypes.map((type, index) => (
            <div
              key={type}
              className={`flex items-center justify-center gap-2 p-2 m-2 text-xl capitalize ${
                isActiveType === index
                  ? "bg-white scale-105 font-bold"
                  : "font-light"
              }`}
              onClick={() => setIsActiveType(index)}
            >
              {type}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          {crustSizes.map((crust, index) => (
            <div
              key={crust}
              className={`flex items-center text-center justify-center gap-2 p-2 m-2 text-sm ${
                isActiveCrust === index
                  ? "bg-white scale-105 font-bold"
                  : "font-light"
              } transition-transform duration-200 ease-in-out`}
              onClick={() => setIsActiveCrust(index)}
            >
              {crust}
            </div>
          ))}
        </div>
        {/* <div className="bg-gray-200 rounded-2xl">
        <div className="flex items-center justify-center gap-5 py-2">
          <p className="bg-white rounded-[5px] px-2">Тонкое</p>
          <p>Традиционное</p>
        </div>
        <div className="flex items-center justify-center gap-5 pb-2">
          <p className="bg-white rounded-[5px] px-2">26 см.</p>
          <p>30 см.</p>
          <p>40 см.</p>
        </div>
      </div> */}
      </div>
      <div className="flex justify-between items-center my-2">
        <p className="text-2xl font-bold">От {price} ₽</p>
        <button
          className="group border border-[#FE5F1E] bg-white h-10 rounded-4xl text-[#FE5F1E] font-bold text-sm px-4 hover:bg-[#FE5F1E] hover:text-white hover:cursor-pointer"
          onClick={() =>
            addPizza(
              id,
              price,
              doughTypes[isActiveType],
              crustSizes[isActiveCrust]
            )
          }
        >
          {`+ Добавить `}{" "}
          <span className="bg-[#FE5F1E] text-white rounded-full px-2 p-1 group-hover:bg-white group-hover:text-[#FE5F1E]">
            {pizzaCount}
          </span>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
