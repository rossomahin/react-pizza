import { useState } from "react";

interface CategoriesProps {
  category: string;
  setCategory: (category: string) => void;
}

type Category = {
  key: string;
  label: string;
};

const categories: Category[] = [
  { key: "all", label: "Все" },
  { key: "meat", label: "Мясные" },
  { key: "vegan", label: "Вегетарианские" },
  { key: "grill", label: "Гриль" },
  { key: "spicy", label: "Острые" },
  { key: "closed", label: "Закрытые" },
];

function Categories({ category, setCategory }: CategoriesProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  function handleOpen() {
    setVisible(true);
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => setVisible(false), 200);
  }

  return (
    <div className="relative">
      <button
        className="sm:hidden px-4 py-2 bg-gray-100 rounded-xl"
        onClick={handleOpen}
      >
        {categories.find((c) => c.key === category)?.label || "Категории"}
      </button>
      {visible && (
        <div
          className={`absolute top-full mt-2 bg-white shadow-md rounded-xl z-10 ${
            open
              ? "scale-100 opacity-100 pointer-events-auto"
              : "scale-[0.95] opacity-0 pointer-events-none"
          } transition-all duration-200 ease-in-out`}
        >
          {categories.map((c) => (
            <div
              key={c.key}
              className={`px-4 py-2 cursor-pointer active:bg-gray-200 hover:bg-gray-100 last:hover:rounded-b-xl first:hover:rounded-t-xl ${
                category === c.key ? "font-bold text-[#FE5F1E]" : ""
              } transition-all duration-200 ease-in-out`}
              onClick={() => {
                setCategory(c.key);
                handleClose();
              }}
            >
              {c.label}
            </div>
          ))}
        </div>
      )}

      <div className="hidden sm:flex gap-2">
        {categories.map((c) => (
          <button
            key={c.key}
            className={`rounded-4xl px-6 py-2 ${
              category === c.key
                ? "bg-[#282828] text-white"
                : "bg-[#F9F9F9] text-black"
            } active:scale-95 transition-colors ease-in-out duration-300`}
            onClick={() => setCategory(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
