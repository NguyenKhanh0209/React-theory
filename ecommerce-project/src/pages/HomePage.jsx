import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import "./HomePage.css";
import { formatMoney } from "../utils/money";

export function Homepage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Nếu không dùng useEffect, thì khi component được render, nó sẽ thực hiện lệnh axios.get() mỗi lần render, dẫn đến việc gửi nhiều yêu cầu đến server và gây ra hiệu suất kém.
    // Sử dụng useEffect với một mảng rỗng [] làm dependency sẽ đảm bảo rằng lệnh axios.get() chỉ được thực hiện một lần khi component được mount, tránh việc gửi nhiều yêu cầu không cần thiết đến server.
    axios.get("/api/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  {formatMoney(product.priceCents)}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
