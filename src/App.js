import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Department } from "./pages/Department";
import { NewProduct } from "./pages/NewProduct";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "#fff" : "#c2c2c2",
});

function App() {
  return (
    <div className="App flex">
      <nav className="w-56 h-screen p-12 text-xl flex flex-col gap-16 bg-primary">
        <NavLink to="/" style={getActiveStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/department" style={getActiveStyle}>
          Department
        </NavLink>
        <NavLink to="/products" style={getActiveStyle}>
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/department" element={<Department />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
