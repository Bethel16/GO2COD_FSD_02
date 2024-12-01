const ProductItemsSlider = () => {
  const products = [
    { id: 1, img: "img/item/1.jpg", title: "Abeba Gomen", price: 450.99, regularPrice: 800.99, isVeg: true },
    { id: 6, img: "img/item/6.jpg", title: "Red Grapes", price: 450.99, regularPrice: 800.99, isVeg: true }, 
    { id: 1, img: "img/item/1.jpg", title: "Abeba Gomen", price: 450.99, regularPrice: 800.99, isVeg: true }, 
    { id: 6, img: "img/item/6.jpg", title: "Red Grapes", price: 450.99, regularPrice: 800.99, isVeg: true }, 
    

  ];

  return (
    <div className="main-content">
      {/* Carousel Slider */}
      {/* Product List Section */}
      <section className="product-items-slider section-padding">
        <div className="container">
          <div className="section-header">
            <h5 className="heading-design-h5">
              Top Savers Today <span className="badge badge-success">20% OFF</span>
              <a className="float-right text-secondary" href="shop.html">
                View All
              </a>
            </h5>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-3 col-xs-12 mb-4">
                <div className="product">
                  <a href="single.html">
                    <div className="product-header">
                      <span className="badge badge-success">50% OFF</span>
                      <img className="img-fluid" src={product.img} alt={product.title} />
                      <span
                        className={`${
                          product.isVeg ? "veg text-success" : "non-veg text-danger"
                        } mdi mdi-circle`}
                      ></span>
                    </div>
                    <div className="product-body">
                      <h5>{product.title}</h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval"></span> Available in
                        </strong>{" "}
                        - 500 gm
                      </h6>
                    </div>
                    <div className="product-footer">
                      <p className="offer-price mb-0">
                        ${product.price} <i className="mdi mdi-tag-outline"></i>{" "}
                        <span className="regular-price">${product.regularPrice}</span>
                      </p>
                      <button type="button" className="btn btn-secondary btn-sm">
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

export default ProductItemsSlider;
