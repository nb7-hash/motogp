import { Component } from "react";
import products from "./cartLst";
import "./cart.css";

class Cart extends Component {

  
  render() {

    return (
      <section className="cart" aria-labelledby="featured-riders-heading">
        <div className="cartname-container">
          <div className="cart-tag">
            <p className="blink">.</p>
            <p className="secname">Merchandise</p>
          </div>
          <div>
            <button type="button" className="cartnextbtn"> <i class="fa-brands fa-opencart fa-sm" style={{color:"white"}}></i> </button>
          </div>
        </div>
        <div className="carousel">
          <div className="carousel-track">
            {products.map((each) => (
              <div className="car">
                <img src={each.image} className="cart-img"/>
                                <button className="shop-btn">Shop Now <i class="fa-brands fa-opencart fa-sm" style={{color:"white"}}></i> </button>
              </div>
            ))}
            {products.map((each) => (
              <div className="car">
                <img src={each.image} className="cart-img"/>
                                <button className="shop-btn">Shop Now <i class="fa-brands fa-opencart fa-sm" style={{color:"white"}}></i> </button>

              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
