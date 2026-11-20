import { Component } from "react";
import products from "./cartLst";
import "./cart.css";

class Cart extends Component {
  state = { activetab: 0 };

  componentDidMount() {
    this.slideTimer = window.setInterval(() => {
      this.setState((prev) => ({
        activetab: (prev.activetab + 1) % products.length,
      }));
    }, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.slideTimer);
  }

  render() {
    const { activetab } = this.state;
    const { image, id } = products[activetab];

    return (
      <section className="cart" aria-labelledby="featured-riders-heading">
        <div className="cartname-container">
          <div className="cart-tag">
            <p>.</p>
            <p>Mechandise</p>
          </div>
          <div>
            <button>Button</button>
          </div>
        </div>

        <div className="cart-container">
          <div className="cart-card">
            <div className="cart-image">
              <img src={image} className="ims1" alt={id} />
            </div>
            <div>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
