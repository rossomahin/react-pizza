import { useSortStore } from "../store/sortStore";
import arrowForSorting from "../assets/arrowForSorting.svg";
import { useState } from "react";

function Sort() {
  const sortType = useSortStore((s) => s.sortType);
  const setSortType = useSortStore((s) => s.setSortType);

  const labels = {
    popularity: "популярности",
    price: "цене",
    alphabet: "алфавиту",
  } as const;

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
    setOpen(!open);
  };

  const handleChooseSort = (key: keyof typeof labels) => {
    setSortType(key);
    setOpen(false);

    setTimeout(() => setVisible(false), 200);
  };

  return (
    <div className="relative">
      <button className="flex gap-2 items-center" onClick={handleOpen}>
        <img
          className={`${
            open ? "rotate-180" : "rotate-0"
          } transform transition-transform duration-200 ease-in-out`}
          src={arrowForSorting}
          alt="arrow"
        />
        <p>
          Сортировка по{" "}
          <span className="border-b border-dashed border-[#FE5F1E] text-[#FE5F1E]">
            {labels[sortType]}
          </span>
        </p>
      </button>

      <div
        className={`${
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-[0.95] opacity-0 pointer-events-none"
        } absolute bg-white shadow-md rounded-2xl mt-2 py-2 w-48 z-10 transition-all duration-200 ease-in-out`}
      >
        {Object.entries(labels).map(([key, label]) => (
          <div
            key={key}
            className={`    px-4 py-2 cursor-pointer hover:bg-gray-100 ${
              sortType === key ? "font-bold text-[#FE5F1E]" : ""
            }`}
            onClick={() => handleChooseSort(key as keyof typeof labels)}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sort;
