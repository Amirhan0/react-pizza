import { useState } from "react";
import plusOrange from "/plusOrange.svg";

export default function PizzaList(pizzas) {
  const data = pizzas.pizzas.pizzas;
  const [doughType, setDoughType] = useState({});
  const [size, setSize] = useState({});

  function onClickDough(pizzaId, index) {
    setDoughType((prev) => ({
      ...prev,
      [pizzaId]: index,
    }));
  }

  function onClickSize(pizzaId, index) {
    setSize((prev) => ({
      ...prev,
      [pizzaId]: index,
    }));
  }

  return (
    <div className="mt-10">
      <div className="mb-10">
        <h2 className="font-bold text-3xl">Все пиццы</h2>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {data.map((pizza) => (
          <div
            key={pizza.id}
            className="flex flex-col justify-center items-center gap-3"
          >
            <img src={pizza.imageUrl} alt="" />
            <h3 className="font-bold text-xl">{pizza.name}</h3>
            <div className="p-4 bg-gray-100 rounded-xl">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button
                  className={`py-2 px-4 rounded-lg font-medium ${
                    doughType[pizza.id] === 0
                      ? "bg-white shadow"
                      : "bg-gray-200"
                  }`}
                  onClick={() => onClickDough(pizza.id, 0)}
                >
                  тонкое
                </button>
                <button
                  className={`py-2 px-4 rounded-lg font-medium ${
                    doughType[pizza.id] === 1
                      ? "bg-white shadow"
                      : "bg-gray-200"
                  }`}
                  onClick={() => onClickDough(pizza.id, 1)}
                >
                  традиционное
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {pizza.sizes.map((sizeValue, sizeIndex) => (
                  <button
                    key={sizeIndex}
                    className={`py-2 px-3 rounded-lg font-medium ${
                      size[pizza.id] === sizeIndex
                        ? "bg-white shadow"
                        : "bg-gray-200"
                    }`}
                    onClick={() => onClickSize(pizza.id, sizeIndex)}
                  >
                    {sizeValue} см.
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-around items-center w-full">
              <span className="font-bold text-xl">от {pizza.price} тг</span>
              <div className="border cursor-pointer border-orange-500 rounded-full flex items-center py-2 px-4 gap-2 text-orange-500 font-bold">
                <img src={plusOrange} alt="" />
                <span>Добавить</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
