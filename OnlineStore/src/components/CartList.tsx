import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Define the CartItem type
type CartItem = {
  id: number;
  image: string;
  name: string;
  description: string;
  available: boolean;
  price: number;
  quantity: number;
  totalPrice: number;
  discounted_price: number;
};

const CartList: React.FC = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Access the product data passed from the SingleProductPage
  const { product } = location.state || {}; // Default to empty object if no data is passed

  useEffect(() => {
    if (product) {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);

        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: (item.quantity + 1) * item.discounted_price,
                }
              : item
          );
        } else {
          return [
            ...prevItems,
            {
              id: product.id,
              image: `http://127.0.0.1:8000${product.image}`,
              name: product.name,
              description: product.description,
              available: product.available,
              price: product.price,
              discounted_price: product.discounted_price,
              quantity: 1,
              totalPrice: product.discounted_price,
            },
          ];
        }
      });
    }
  }, [product]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
              totalPrice: Math.max(1, item.quantity + delta) * item.discounted_price,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const discount = 100;
  const finalAmount = totalAmount - discount;

  return (
    <div className="cart-container">
      <div className="card card-body cart-table">
        <div className="table-responsive">
          <table className="table cart_summary">
            <thead>
              <tr>
                <th className="cart_product">Product</th>
                <th>Description</th>
                <th>Avail.</th>
                <th>Unit price</th>
                <th>Qty</th>
                <th>Total</th>
                <th className="action">
                  <i className="mdi mdi-delete-forever"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="cart_product">
                    <a href="#">
                      <img className="img-fluid" src={item.image} alt={item.name} />
                    </a>
                  </td>
                  <td className="cart_description">
                    <h5 className="product-name">
                      <a href="#">{item.name}</a>
                    </h5>
                    <h6>
                      <strong>
                        <span className="mdi mdi-approval"></span>  Available in - 500 gm
                      </strong>
                    </h6>
                  </td>
                  <td className={`availability ${item.available ? "in-stock" : "out-of-stock"}`}>
                    <span className={`badge ${item.available ? "badge-success" : "badge-danger"}`}>
                      {item.available ? "In stock" : "Out of stock"}
                    </span>
                  </td>
                  <td className="price">
                    <span>${item.discounted_price}</span>
                  </td>
                  <td className="qty">
                    <div className="input-group">
                      <span className="input-group-btn">
                        <button
                          disabled={item.quantity <= 1}
                          className="btn btn-theme-round btn-number"
                          type="button"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                      </span>
                      <input
                        type="text"
                        className="form-control border-form-control form-control-sm input-number"
                        value={item.quantity}
                        readOnly
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-theme-round btn-number"
                          type="button"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </span>
                    </div>
                  </td>
                  <td className="price">
                    <span>${item.totalPrice}</span>
                  </td>
                  <td className="action">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <i className="mdi mdi-close-circle-outline"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5} className="text-right">
                  Discount:
                </td>
                <td colSpan={2}>${discount}</td>
              </tr>
              <tr>
                <td colSpan={5} className="text-right">
                  Total products (tax incl.):
                </td>
                <td colSpan={2}>${totalAmount}</td>
              </tr>
              <tr>
                <td colSpan={5} className="text-right">
                  <strong>Total:</strong>
                </td>
                <td colSpan={2} className="text-danger">
                  <strong>${finalAmount}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <a href="/checkout">
          <button className="btn btn-secondary btn-lg btn-block text-left" type="button">
            <span className="float-left">
              <i className="mdi mdi-cart-outline"></i> Proceed to Checkout
            </span>
            <span className="float-right">
              <strong>${finalAmount}</strong>{" "}
              <span className="mdi mdi-chevron-right"></span>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default CartList;
