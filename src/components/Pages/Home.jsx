import PizzaList from "../PizzaList";
import Category from "../Category";
import Sort from "../Sort";
import { useState } from "react";

export default function MainPage() {
  const [sortType, setSortType] = useState("популярности");
  const [categoryType, setCategoryType] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-between mt-10">
        <Category
          categoryType={categoryType}
          setCategoryType={setCategoryType}
        />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <PizzaList sortType={sortType} categoryType={categoryType} />
    </div>
  );
}
