import { useState } from "react";

export default function Category() {
  const categoryes = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [active, setActive] = useState(0);

  function onClickCategory(index) {
    setActive(index);
    console.log(index);
  }
  return (
    <ul className="flex items-center justify-between basis-1/2 gap-3">
      {categoryes.map((value, index) => (
        <li
          onClick={() => onClickCategory(index)}
          key={index}
          className={
            index === active
              ? "bg-black text-white px-7 py-3 rounded-full font-bold"
              : "bg-gray-100 text-black" +
                "bg-gray-100 rounded-full text-center py-3 px-7 font-bold text-black hover:bg-black hover:text-white cursor-pointer"
          }
        >
          {value}
        </li>
      ))}
    </ul>
  );
}
