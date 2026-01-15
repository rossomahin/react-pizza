import Header from "./Header";
import { usePizzaStore } from "../store/pizzaStore";
import { pizzasData } from "../data/pizzasData";
import { NavLink } from "react-router-dom";
import { crustSizes } from "@/data/pizzaOptions";

function Cart() {
  const pizzas = usePizzaStore((state) => state.pizzas);

  const items = Object.entries(pizzas);

  if (items.length === 0) {
    return (
      <>
        <Header />
        <hr className="border border-[#F9F9F9] w-[95%] mx-auto rounded-4xl my-5" />
        <div className="flex flex-col justify-center mx-auto text-center h-[70vh]">
          <h1 className="text-8xl font-extrabold">Корзина пуста 😕</h1>
          <h2 className="text-6xl font-bold">
            Вероятней всего, вы не заказывали ещё пиццу.
          </h2>
          <h3 className="text-4xl font-medium">
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Корзина</h1>

        {items.map(([key, pizza]) => {
          const [idStr, type, crust] = key.split("_");
          const pizzaInfo = pizzasData.find((p) => p.id === Number(idStr));
          return (
            <div
              key={key}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <p className="font-bold">{pizzaInfo?.title}</p>
                <p className="text-gray-500">
                  {pizza.count} x {pizza.price} ₽ — {type} - {crust}
                </p>
                <img
                  src={pizzaInfo?.imageUrl}
                  alt={pizzaInfo?.title}
                  className="inline-block w-15 h-15 rounded-full"
                />
              </div>
              <p className="font-bold">{pizza.count * pizza.price} ₽</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end mt-6">
        <NavLink
          to="*"
          className="border border-[#FE5F1E] bg-white h-10 rounded-4xl text-[#FE5F1E] font-bold text-sm px-6 py-2 mr-65 hover:bg-[#FE5F1E] hover:text-white hover:cursor-pointer"
        >
          {`Оплатить `}
        </NavLink>
      </div>
    </>
  );
}

export default Cart;
