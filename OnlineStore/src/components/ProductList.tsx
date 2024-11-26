import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  discounted_price?: number;
  stock: number;
  category: string;
  image: string;
  tags?: string;
  availability: boolean;
  quick_overview?: string;
  features?: string[];
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/") // Replace with your Django API URL
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data); // TypeScript ensures data matches the `Product[]` type
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  const handleAddToCart = (product: Product) => {
    console.log(`Added product ${product.name} to cart!`);
    navigate("/cart-list", { state: { product } }); // Navigate to the CartList page and pass product data
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`); // Navigate to the product details page
  };

  return (
    <div className="main-content">
      <section className="product-list section-padding">
        <div className="container">
          <div className="section-header">
            <h5 className="heading-design-h5">All Products</h5>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-3 col-sm-6 col-xs-12 mb-4">
                <div className="product">
                  <a href={`#`} onClick={(e) => e.preventDefault()}>
                    <div className="product-header">
                      <img
                        className="img-fluid product-image"
                        src={"http://127.0.0.1:8000" + product.image}
                        alt={product.name}
                      />
                    </div>
                    <div className="product-body">
                      <h5
                        style={{ cursor: "pointer" }}
                        onClick={() => handleProductClick(product.id)} // Navigate to product details page
                      >
                        {product.name}
                      </h5>
                      <p className="product-pricing">
                        <strong className="price">
                          ${product.discounted_price}
                        </strong>
                        {product.discounted_price && (
                          <span className="regular-price">${product.price} </span>
                        )}
                      </p>
                    </div>
                    <div className="product-footer">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleAddToCart(product)} // Pass the entire product object to the CartList page
                      >
                        <i className="mdi mdi-cart-outline"></i> Add To Cart
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
