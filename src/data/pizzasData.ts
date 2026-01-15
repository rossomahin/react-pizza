// data/pizzasData.ts
export interface Pizza {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  category: string[];
  popularity: number;
}

type Dough = "thin" | "traditional";
type Crust = "26cm" | "30cm" | "40cm";

export const pizzasData: Pizza[] = [
  {
    id: 1,
    title: "Бургер-пицца",
    price: 409,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/0199b77856ec79a986a2d582c2678fff.avif",
    category: ["meat"],
    popularity: 5,
  },
  {
    id: 2,
    title: "Гавайская",
    price: 389,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.avif",
    category: ["vegan"],
    popularity: 3,
  },
  {
    id: 3,
    title: "Пепперони фреш",
    price: 299,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/0198bf57bc517218ab93c762f4b0193e.avif",
    category: ["meat", "spicy"],
    popularity: 7,
  },
];

// fake API
export const fetchPizzas = async (): Promise<Pizza[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(pizzasData), 2000);
  });
};
