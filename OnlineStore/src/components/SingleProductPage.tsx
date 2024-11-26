import React, { useEffect, useState} from "react";
import { useParams , useNavigate } from "react-router-dom"; // Import useParams to access the product ID from the URL

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  discounted_price: number;
  image: string;
  available: boolean;
  category: string;
};

const SingleProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // Fetch product data by ID when the component mounts
  useEffect(() => {
    if (id) {
      fetch(`http://127.0.0.1:8000/api/products/${id}/`) // Corrected URL syntax
        .then((response) => response.json())
        .then((data: Product) => {
          setProduct(data); // Set the product data in state
          console.log("Product ddta" ,  data)
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product is not found
  }

  const handleAddToCart = () => {
    console.log(`Added product ${product.name} to cart!`);
    navigate('/cart-list', {
      state: { product }, // Pass the product data via state
    });
  };

  return (
    <section className="shop-single section-padding pt-3">
      <div className="container">
        <div className="row">
          {/* Left side: Product Image Carousel */}
          <div className="col-md-6">
            <div className="shop-detail-left">
              <div className="shop-detail-slider">
                <div className="favourite-icon">
                  <a className="fav-btn" title="59% OFF">
                    <i className="mdi mdi-tag-outline"></i>
                  </a>
                </div>

                {/* Main image slider */}
                <div id="sync1" className="owl-carousel">
                  <div className="item">
                    <img
                      alt={product.name}
                      src={"http://127.0.0.1:8000" + product.image} // Ensure the URL is valid
                      className="img-fluid img-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Product Details */}
          <div className="col-md-6">
            <div className="shop-detail-right">
              <span className="badge badge-success">50% OFF</span>
              <h2>{product.name}</h2>
              <h6>
                <strong>
                  <span className="mdi mdi-approval"></span> Available in
                </strong>{" "}
                - 500 gm
              </h6>
              <p className="regular-price">
                <i className="mdi mdi-tag-outline"></i> MRP : ${product.price}
              </p>
              <p className="offer-price mb-0">
                Discounted price : <span className="text-success">${product.discounted_price}</span>
              </p>

              <button onClick={handleAddToCart} type="button" className="btn btn-secondary btn-lg">
                <i className="mdi mdi-cart-outline"></i> Add To Cart
              </button>

              {/* Product Quick Overview */}
              <div className="short-description">
                <h5>
                  Quick Overview
                  <p className="float-right">
                    Availability:{" "}
                    <span className={`badge ${product.available ? "badge-success" : "badge-danger"}`}>
                      {product.available ? "In Stock" : "Out of Stock"}
                    </span>
                  </p>
                </h5>
                <p>{product.description}</p>
              </div>

              {/* Why Shop From Us */}
              <h6 className="mb-3 mt-4">Why shop from Groci?</h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="feature-box">
                    <i className="mdi mdi-truck-fast"></i>
                    <h6 className="text-info">Free Delivery</h6>
                    <p>Fast and reliable delivery right to your door.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-box">
                    <i className="mdi mdi-basket"></i>
                    <h6 className="text-info">100% Guarantee</h6>
                    <p>We guarantee the quality of our products.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
