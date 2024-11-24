import React from "react";

// Example product data (you can replace this with dynamic data later)
const products = [
  { id: 1, img: "img/item/1.jpg", title: "Product 1", price: 450.99, regularPrice: 800.99 },
  { id: 2, img: "img/item/2.jpg", title: "Product 2", price: 150.99, regularPrice: 250.99 },
  { id: 3, img: "img/item/3.jpg", title: "Product 3", price: 350.99, regularPrice: 500.99 },
  { id: 4, img: "img/item/4.jpg", title: "Product 4", price: 550.99, regularPrice: 700.99 },
  { id: 5, img: "img/item/5.jpg", title: "Product 5", price: 650.99, regularPrice: 900.99 },
  { id: 6, img: "img/item/6.jpg", title: "Product 6", price: 850.99, regularPrice: 1200.99 },
  { id: 7, img: "img/item/7.jpg", title: "Product 7", price: 450.99, regularPrice: 800.99 },
  { id: 8, img: "img/item/8.jpg", title: "Product 8", price: 500.99, regularPrice: 850.99 }
];

const ProductList = () => {
  return (
    <div className="main-content">
      <section className="product-list section-padding">
        <div className="container">
          <div className="section-header">
            <h5 className="heading-design-h5">
              All Products
            </h5>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-3 col-xs-12 mb-4">
                <div className="product">
                  <a href="single.html">
                    <div className="product-header">
                      <img className="img-fluid" src={product.img} alt={product.title} />
                    </div>
                    <div className="product-body">
                      <h5>{product.title}</h5>
                      <p>
                        <strong>${product.price}</strong>{" "}
                        <span className="regular-price">${product.regularPrice}</span>
                      </p>
                    </div>
                    <div className="product-footer">
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

export default ProductList;
