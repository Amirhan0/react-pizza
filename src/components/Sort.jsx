import { useState } from "react";

export default function Sort({ sortType, setSortType }) {
  const [catOpen, clickCat] = useState(false);
  return (
    <div
      onClick={() => (catOpen ? clickCat(false) : clickCat(true))}
      className="relative cursor-pointer"
    >
      <label className="font-bold cursor-pointer">
        Сортировка по:
        <span className="text-orange-400 font-normal cursor-pointer">
          {sortType}
        </span>
      </label>
      <div
        className={`absolute right-0 bg-gray-100 p-4 rounded-lg transition-opacity duration-300 grid grid-rows-3 gap-2 ${
          catOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <p
          onClick={() => setSortType("популярности")}
          className="cursor-pointer hover:text-orange-400"
        >
          популярности
        </p>
        <p
          onClick={() => setSortType("по цене")}
          className="cursor-pointer hover:text-orange-400"
        >
          по цене
        </p>
        <p
          onClick={() => setSortType("по алфавиту")}
          className="cursor-pointer hover:text-orange-400"
        >
          по алфавиту
        </p>
      </div>
    </div>
  );
}
