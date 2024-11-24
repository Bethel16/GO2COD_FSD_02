import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  images: string[];
  available: boolean;
  category: string;
}

const SingleProductPage: React.FC = () => {  
  // Example static data for a product (you can replace this with real data fetched from an API or state)
  const product: Product = {
    id: 1,
    name: 'SaveMore Corn Flakes (Pouch)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.',
    price: 800.99,
    discountPrice: 450.99,
    images: [
      'img/item/1.jpg',
    ],
    available: true,
    category: 'Breakfast & Dairy',
  };

  // Add to cart handler
  const handleAddToCart = () => {
    console.log(`Added product ${product.name} to cart!`);
    // Implement cart functionality here, e.g., updating cart state/context
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
                  {product.images.map((image, index) => (
                    <div key={index} className="item">
                      <img alt={product.name} src={image} className="img-fluid img-center" />
                    </div>
                  ))}
                </div>

                {/* Thumbnail image slider */}
                <div id="sync2" className="owl-carousel">
                  {product.images.map((image, index) => (
                    <div key={index} className="item">
                      <img alt={product.name} src={image} className="img-fluid img-center" />
                    </div>
                  ))}
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
                <i className="mdi mdi-tag-outline"></i> MRP : ${product.price.toFixed(2)}
              </p>
              <p className="offer-price mb-0">
                Discounted price : <span className="text-success">${product.discountPrice.toFixed(2)}</span>
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
