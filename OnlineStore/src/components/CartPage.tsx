import React from "react";
import { Link } from "react-router-dom"; // For navigation to checkout
import './assets/css/global.css'; // Import your CSS (you can modify this based on your needs)

const CartPage: React.FC = () => {
  return (
    <section className="shop-single section-padding pt-3">
      <div className="container">
        <div className="row">
          {/* Product Image Slider */}
          <div className="col-md-6">
            <div className="shop-detail-left">
              <div className="shop-detail-slider">
                <div className="favourite-icon">
                  <a
                    className="fav-btn"
                    data-placement="bottom"
                    data-toggle="tooltip"
                    href="#"
                    data-original-title="59% OFF"
                  >
                    <i className="mdi mdi-tag-outline"></i>
                  </a>
                </div>

                {/* Main image slider */}
                <div id="sync1" className="owl-carousel">
                  <div className="item">
                    <img
                      alt="Product"
                      src="img/item/1.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                  <div className="item">
                    <img
                      alt="Product"
                      src="img/item/2.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                  <div className="item">
                    <img
                      alt="Product"
                      src="img/item/3.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                  <div className="item">
                    <img
                      alt="Product"
                      src="img/item/4.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                  <div className="item">
                    <img
                      alt="Product"
                      src="img/item/5.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                  <div className="item">
                    <img
                      alt="Product"
                      src="img/item/6.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                </div>

                {/* Thumbnail image slider */}
                <div id="sync2" className="owl-carousel">
                  <div className="item">
                    <img
                      alt="Thumbnail"
                      src="img/item/1.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                  <div className="item">
                    <img
                      alt="Thumbnail"
                      src="img/item/2.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                  <div className="item">
                    <img
                      alt="Thumbnail"
                      src="img/item/3.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                  <div className="item">
                    <img
                      alt="Thumbnail"
                      src="img/item/4.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                  <div className="item">
                    <img
                      alt="Thumbnail"
                      src="img/item/5.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                  <div className="item">
                    <img
                      alt="Thumbnail"
                      src="img/item/6.jpg"
                      className="img-fluid img-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Detail Section */}
          <div className="col-md-6">
            <div className="shop-detail-right">
              <span className="badge badge-success">50% OFF</span>
              <h2>SaveMore Corn Flakes (Pouch)</h2>
              <h6>
                <strong>
                  <span className="mdi mdi-approval"></span> Available in
                </strong>{" "}
                - 500 gm
              </h6>
              <p className="regular-price">
                <i className="mdi mdi-tag-outline"></i> MRP : $800.99
              </p>
              <p className="offer-price mb-0">
                Discounted price : <span className="text-success">$450.99</span>
              </p>
              <Link to="/checkout">
                <button type="button" className="btn btn-secondary btn-lg">
                  <i className="mdi mdi-cart-outline"></i> Add To Cart
                </button>
              </Link>

              {/* Product Quick Overview */}
              <div className="short-description">
                <h5>
                  Quick Overview
                  <p className="float-right">
                    Availability: <span className="badge badge-success">In Stock</span>
                  </p>
                </h5>
                <p>
                  <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>{" "}
                  Nam fringilla augue nec est tristique auctor. Donec non est
                  at libero vulputate rutrum.
                </p>
                <p className="mb-0">
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                  malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere
                  at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros
                  convallis interdum.
                </p>
              </div>

              {/* Shop Features */}
              <h6 className="mb-3 mt-4">Why shop from Groci?</h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="feature-box">
                    <i className="mdi mdi-truck-fast"></i>
                    <h6 className="text-info">Free Delivery</h6>
                    <p>Lorem ipsum dolor...</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-box">
                    <i className="mdi mdi-basket"></i>
                    <h6 className="text-info">100% Guarantee</h6>
                    <p>Rorem Ipsum Dolor sit...</p>
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

export default CartPage;
