import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import CategorySection from "./components/CategorySection";
import ProductItemsSlider from "./components/ProductItemsSliders";
import ProductList from "./components/ProductList";
import "./assets/css/global.css";
import "./assets/css/osahan.css";
import SingleProductPage from "./components/SingleProductPage";
import CartList from "./components/CartList";
const handleCategorySelect = (categoryId: number) => {
  console.log("Category selected:", categoryId);
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              <CategorySection onCategorySelect={handleCategorySelect} />
              <ProductItemsSlider />
            </div>
          }
        />
        
        {/* Product List Page */}
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/cart-list" element={<CartList />} />

        {/* Single Product Detail Page with dynamic product ID */}
        <Route path="/product/:id" element={<SingleProductPage />} /> {/* Update to dynamic path */}
      </Routes>
    </Router>
  );
}

export default App;
