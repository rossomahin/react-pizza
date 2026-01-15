import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzasList from "./components/PizzasList";

function App() {
  const [category, setCategory] = useState("all");
  const [sortType, setSortType] = useState("popularity");

  return (
    <>
      <Header />
      <hr className="border border-[#F9F9F9] w-[95%] mx-auto rounded-4xl my-5" />
      <div className="flex justify-around items-center sm:justify-between">
        <Categories category={category} setCategory={setCategory} />
        <Sort />
      </div>
      <h1 className="text-4xl font-extrabold my-5 text-center sm:text-start">
        Все пиццы
      </h1>
      <PizzasList category={category} sortType={sortType} />
    </>
  );
}

export default App;
