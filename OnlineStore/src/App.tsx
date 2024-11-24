import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import CategorySection from "./components/CategorySection";
import ProductItemsSlider from "./components/ProductItemsSliders";
import ProductList from "./components/ProductList";
import "./assets/css/global.css";
import SingleProductPage from "./components/SingleProductPage";

// Function to handle category selection
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
        
        {/* Single Product Detail Page */}
        <Route path="/product" element={<SingleProductPage />} /> {/* New route for product details */}
      </Routes>
    </Router>
  );
}

export default App;
