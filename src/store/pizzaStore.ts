import { create } from "zustand";
import { produce } from "immer";

interface PizzaStore {
  pizzas: {
    [key: string]: {
      count: number;
      price: number;
      type: string;
      crust: string;
    };
  };
  addPizza: (id: number, price: number, type: string, crust: string) => void;
  removePizza: (key: string) => void;
  setPizzaCount: (
    key: string,
    count: number,
    price: number,
    type: string,
    crust: string
  ) => void;
}

export const usePizzaStore = create<PizzaStore>((set) => ({
  pizzas: {},

  addPizza: (id, price, type, crust) =>
    set(
      produce((state) => {
        const key = `${id}_${type}_${crust}`;
        if (state.pizzas[key]) {
          state.pizzas[key].count += 1;
        } else {
          state.pizzas[key] = { count: 1, price, type, crust };
        }
      })
    ),

  removePizza: (key) =>
    set(
      produce((state) => {
        delete state.pizzas[key];
      })
    ),

  setPizzaCount: (key, count, price, type, crust) =>
    set(
      produce((state) => {
        if (count <= 0) {
          delete state.pizzas[key];
        } else {
          state.pizzas[key] = { count, price, type, crust };
        }
      })
    ),
}));
