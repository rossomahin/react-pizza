# React Pizza 🍕

## A modern, responsive pizza ordering interface built with React, Zustand, and Tailwind CSS. Users can browse pizzas, choose dough types and crust sizes, add items to the cart, and see a dynamic total price.

### This project showcases state management, responsive design, animations, and interactive UI components.

---

## Features

    •	Browse all pizzas with images, prices, and popularity.
    •	Filter pizzas by categories (Meat, Vegan, Grill, Spicy, Closed).
    •	Sort pizzas by popularity, price, or alphabetically.
    •	Choose dough type and crust size for each pizza.
    •	Add pizzas to the cart with quantity tracking.
    •	Cart displays all selected pizzas, types, crusts, and total price.
    •	Fully responsive layout for desktop and mobile.
    •	Skeleton loading components while fetching data.

---

## Technologies & Dependencies

    •	React 19.2 – UI library
    •	React Router 7.11 – routing
    •	Zustand 5.0.9 – state management
    •	React Query 5.90 – async data fetching & caching
    •	Tailwind CSS 4.1.18 – styling and responsive layout
    •	@shadcn/ui 0.0.4 – UI components
    •	clsx 2.1.1 & tailwind-merge 3.4.0 – class name management
    •	immer 11.1.0 – immutable state updates

---

## Project Structure

src/
├─ components/ # React components (PizzaBlock, Categories, Sort, Cart, Header, etc.)
├─ data/ # Pizza data and options (doughTypes, crustSizes)
├─ store/ # Zustand stores (pizzaStore, sortStore)
├─ assets/ # Images (pizza images, logos, icons)
├─ App.tsx # Main app component

## Installation

---

```
#	1.	Clone the repository:
git clone https://github.com/rossomahin/react-pizza.git
cd react-pizza
```

---

```
#	2.	Install dependencies:
npm install
```

---

```
#	3.	Start the development server:
npm run dev
```

## Open http://localhost:#### in your browser to see the app.

## Usage

    •	Click Categories or Sort to filter and sort pizzas.
    •	Select dough type and crust size for your pizza.
    •	Click + Add to add a pizza to the cart.
    •	Open the Cart page via the top-right button to see selected pizzas and total price.

---

## Notes

    •	Images are loaded via URLs from the data file, no external server required.
    •	Skeleton components are used for a smooth loading experience.
    •	The app is fully responsive: it adapts to mobile and desktop screens.

---

License

This project is open-source and available under the MIT License.

---
