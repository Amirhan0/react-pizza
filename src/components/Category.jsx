export default function Category({ categoryType, setCategoryType }) {
  const categoryes = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  function onClickCategory(index) {
    setCategoryType(index);
    console.log(index);
  }
  return (
    <ul className="flex items-center justify-between basis-1/2 gap-3">
      {categoryes.map((value, index) => (
        <li
          onClick={() => onClickCategory(index)}
          key={index}
          className={
            index === categoryType
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
