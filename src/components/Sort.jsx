import { useState } from "react";

export default function Sort() {
  const [catOpen, clickCat] = useState(false);
  const [type, clickSetType] = useState("популярности");
  return (
    <div
      onClick={() => (catOpen ? clickCat(false) : clickCat(true))}
      className="relative cursor-pointer"
    >
      <label className="font-bold cursor-pointer" htmlFor="">
        Сортировка по:
        <span className="text-orange-400 font-normal cursor-pointer">
          {" "}
          {type}
        </span>
      </label>
      <div
        className={`absolute right-0 bg-gray-100 p-4 rounded-lg transition-opacity duration-300 grid grid-rows-3 gap-2 ${
          catOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <p
          onClick={() => clickSetType("популярности")}
          className="cursor-pointer hover:text-orange-400"
        >
          популярности
        </p>
        <p
          onClick={() => clickSetType("по цене")}
          className="cursor-pointer hover:text-orange-400"
        >
          по цене
        </p>
        <p
          onClick={() => clickSetType("по алфавиту")}
          className="cursor-pointer hover:text-orange-400"
        >
          по алфавиту
        </p>
      </div>
    </div>
  );
}
