import { useNavigate } from "react-router-dom";
export default function Drawer() {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };
  return (
    <div className="max-w-screen-lg mx-auto mt-10 p-4 h-screen">
      <div className="flex items-center justify-between mt-16">
        <div className="flex items-center gap-2">
          <img src="/drawer.svg" alt="Корзина" className="text-gray-950" />
          <h1 className="font-bold text-3xl">Корзина</h1>
        </div>
        <div className="flex items-center gap-2">
          <img src="/trash.svg" alt="Очистить корзину" />
          <span className="font-medium text-gray-500 cursor-pointer">
            Очистить корзину
          </span>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img src="/pizzas/5.svg" alt="Сырный цыпленок" className="w-28" />
            <div>
              <span className="font-bold text-2xl">Сырный цыпленок</span>
              <p className="font-medium text-l text-gray-400">
                Тонкое тесто, 26 см
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img className="cursor-pointer" src="/minus.svg" alt="Уменьшить" />
            <span>2</span>
            <img className="cursor-pointer" src="/plus.svg" alt="Увеличить" />
          </div>
          <div>
            <span className="font-bold text-2xl">770тг</span>
          </div>
          <div>
            <img className="cursor-pointer" src="/delete.svg" alt="Удалить" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-10">
          <div>
            <p className="font-medium text-2xl">
              Всего пицц: <span className="font-bold">3шт.</span>
            </p>
          </div>
          <div>
            <p className="font-medium text-2xl">
              Сумма заказа:{" "}
              <span className="font-bold text-orange-500">900тг</span>
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-between p-2">
          <button
            className="rounded-full text-white bg-gray-500 px-9 py-5 font-medium"
            onClick={goToMainPage}
          >
            Вернуться назад
          </button>
          <button className="bg-orange-600 text-white px-9 py-5 rounded-full font-medium">
            Оплатить сейчас
          </button>
        </div>
      </div>
    </div>
  );
}
