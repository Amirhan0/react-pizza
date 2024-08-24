import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Drawer() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const dough = ["тонкое", "традиционное"];
  const sizes = ["26см", "30см", "40см"];

  const deleteAllItems = () => {
    axios
      .delete("http://localhost:3001/drawer")
      .then(() => {
        setCartItems([]);
        console.log("клик");
      })
      .catch((error) => {
        console.log("Ошибка при очистке корзины");
      });
  };

  const deleteCart = (drawer_id) => {
    axios
      .delete(`http://localhost:3001/drawer/${drawer_id}`)
      .then(() => {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.drawer_id !== drawer_id)
        );
      })
      .catch((error) => {
        console.log("Ошибка при удалении данных корзины", error);
      });
  };

  const updateQuantity = (drawer_id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.drawer_id === drawer_id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) }
          : item
      )
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/drawer")
      .then((response) => {
        const itemsQuantities = response.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setCartItems(itemsQuantities);
      })
      .catch((error) => {
        console.log("Ошибка при получении данных корзины", error);
      });
  }, []);

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
          <span
            className="font-medium text-gray-500 cursor-pointer"
            onClick={deleteAllItems}
          >
            Очистить корзину
          </span>
        </div>
      </div>
      <div className="mt-10">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.drawer_id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-2">
                <img src={item.imageUrl} alt={item.name} className="w-28" />
                <div>
                  <span className="font-bold text-2xl">{item.name}</span>
                  <p className="font-medium text-l text-gray-400">
                    {dough[item.dough_types] || "Не указан"},{" "}
                    {sizes[item.pizza_sizes] || "Не указан"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="cursor-pointer"
                  src="/minus.svg"
                  alt="Уменьшить"
                  onClick={() => updateQuantity(item.drawer_id, -1)}
                />
                <span>{item.quantity}</span>
                <img
                  className="cursor-pointer"
                  src="/plus.svg"
                  alt="Увеличить"
                  onClick={() => updateQuantity(item.drawer_id, 1)}
                />
              </div>
              <div>
                <span className="font-bold text-2xl">{item.price}тг</span>
              </div>
              <div>
                <img
                  className="cursor-pointer"
                  src="/delete.svg"
                  alt="Удалить"
                  onClick={() => deleteCart(item.drawer_id)}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center font-bold text-2xl">Корзина пуста</p>
        )}
        <div className="flex items-center justify-between mt-10">
          <div>
            <p className="font-medium text-2xl">
              Всего пицц:{" "}
              <span className="font-bold">{cartItems.length} шт.</span>
            </p>
          </div>
          <div>
            <p className="font-medium text-2xl">
              Сумма заказа:{" "}
              <span className="font-bold text-orange-500">
                {cartItems.reduce(
                  (total, item) => total + item.price * (item.quantity || 1),
                  0
                )}{" "}
                тг
              </span>
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
