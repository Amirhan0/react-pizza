import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/router";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-orange-300 p-10">
        <div className="bg-white px-10 py-10 rounded-lg">
          <Header />
          <div className="bg-white px-10 py-10 rounded-lg">
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
