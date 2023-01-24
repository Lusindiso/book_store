import { Route, Routes } from "react-router-dom";
import Books from "./components/pages/Books";
import Categories from "./components/pages/Categories";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Header from "./components/UI/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
