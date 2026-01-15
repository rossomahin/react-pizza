import { usePizzaStore } from "../store/pizzaStore";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import { useIsMobile } from "@/hooks/useIsMobile";
function Header() {
  const isMobile = useIsMobile();
  const pizzas = usePizzaStore((state) => state.pizzas);
  const totalPrice = Object.values(pizzas).reduce(
    (sum, pizza) => sum + pizza.count * pizza.price,
    0
  );

  return (
    <header className="flex items-center justify-between">
      <NavLink to="/">
        <div className="flex items-center gap-3 mt-5 ml-5 sm:m-auto">
          <div className="w-9.5 h-10 sm:w-10 sm:h-10">
            <img src={logo} alt="Logo" />
          </div>
          <div className="h-full-10">
            <h1 className="font-extrabold uppercase">React Pizza</h1>
            <p className="text-gray-400 hidden sm:block">
              Самая вкусная пицца во вселенной
            </p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/cart">
        <div className="bg-[#FE5F1E] sm:w-37.5 sm:h-10 w-20 h-10 mt-5 mr-5 sm:m-auto text-center rounded-4xl flex items-center justify-center gap-2 cursor-pointer hover:bg-[#d04914] transition-colors duration-200 ease-in-out">
          <p className="text-white font-bold text-[16px] text-center sm:after:border sm:after:rounded-4xl sm:after:ml-2">
            {totalPrice} ₽
          </p>
          {!isMobile && (
            <div className="w-4.5 h-4.5">
              <img src={cart} alt="Cart" />
            </div>
          )}
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
