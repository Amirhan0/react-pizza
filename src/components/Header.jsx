import { useNavigate } from "react-router-dom";
import cart from "/cart.svg";
export default function Header() {
  const navigate = useNavigate();

  const goToDrawer = () => {
    navigate("/drawer");
  };

  const goToMainPage = () => {
    navigate("/");
  };
  return (
    <div className="header flex items-center justify-between">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={goToMainPage}
      >
        <img src="/logo.svg" alt="" />
        <div>
          <h1 className="text-2xl font-bold">React Pizza</h1>
          <p className="text-gray-500">самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div
        className="bg-orange-500 flex gap-3 items-center justify-center py-2 px-6 rounded-full text-white cursor-pointer"
        onClick={goToDrawer}
      >
        <span>520тг</span>
        <hr className="w-0.5 h-6 bg-orange-300 border-none rounded-xl" />
        <div>
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  );
}
