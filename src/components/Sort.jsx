export default function Sort() {
  return (
    <div className="">
      <span className="m-2 font-bold text-l">Сортировка по:</span>
      <select
        name=""
        id=""
        className="outline-none text-orange-500 font-medium rounded-lg p-2"
      >
        <option value="" className="text-orange-500 font-medium">
          популярности
        </option>
        <option value="" className="text-orange-500 font-medium">
          по цене
        </option>
        <option value="" className="text-orange-500 font-medium">
          по алфавиту
        </option>
      </select>
    </div>
  );
}
