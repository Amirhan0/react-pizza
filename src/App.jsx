import "./App.css";
import data from "./data.json";
import Header from "./components/Header";
import Category from "./components/Category";
import Sort from "./components/Sort";
import PizzaList from "./components/PizzaList";

function App() {
  return (
    <div className="bg-orange-300 p-10">
      <div className="bg-white px-10 py-10 rounded-lg">
        <Header />
        <div className="flex items-center justify-between mt-10">
          <Category />
          <Sort />
        </div>
        <PizzaList pizzas={data} />
      </div>
    </div>
  );
}

export default App;
