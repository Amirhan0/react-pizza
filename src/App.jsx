import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/router";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const getMoney = async () => {
    try {
      const response = await axios.get("http://localhost:3001/drawer");
      const amount = response.data.reduce((sum, item) => sum + item.price, 0);
      console.log("Ответ от API:", response.data);
      setTotalAmount(amount);
      console.log(response);
    } catch (error) {
      console.error( error);
    }
  };

  useEffect(() => {
    getMoney();
  }, []);
  return (
    <BrowserRouter>
      <div className="bg-orange-300 p-10">
        <div className="bg-white px-10 py-10 rounded-lg">
          <Header totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
          <div className="bg-white px-10 py-10 rounded-lg">
            <AppRoutes getMoney={getMoney} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
