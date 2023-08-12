import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Navbar</h1>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
