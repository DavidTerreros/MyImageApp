import Layout from "../pages/Layout";
import { Route, Routes } from "react-router-dom";
import CartShop from "../pages/CartShop";
import Home from "../pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<CartShop />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
