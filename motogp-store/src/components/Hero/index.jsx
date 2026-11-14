import { Component } from "react";

import "./index.css";

const bgUrl = [
  {
    name: "FEEL THE SPEED",
    para: "Racing.Passion.Beyond",
    btnText: "Explore Riders->",
    img: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1794503308/Gemini_Generated_Image_qsz9spqsz9spqsz9_zrqdq1.png",
  },
  {
    name: "THE LEGEND LIVES ON",
    para: "Meet the champions.Discover their stories.",
    img: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1794503247/Gemini_Generated_Image_2bk0oy2bk0oy2bk0_hxuhn2.png",
    btnText: "Know More ->",
  },
  {
    name: "Gear up your passion ",
    para: "Riders Teams.Racing merchanidse",
    img: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1794503288/Gemini_Generated_Image_vpswwrvpswwrvpsw_tzrole.png",
    btnText: "Shop Now->",
  },
];

class Hero extends Component {
  state = { activeId: 0 };

  componentDidMount() {
    this.slideTimer = window.setInterval(() => {
      this.setState((prev) => ({
        activeId: (prev.activeId + 1) % bgUrl.length,
      }));
    }, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.slideTimer);
  }

  render() {
    const { activeId } = this.state;
    const {name,para,img,btnText}= bgUrl[activeId];
    return (
      <div className="navbar-shell">
        <div className="card1">
          <div
            key={activeId}
            className="hero-slide-image"
            style={{ backgroundImage: `url(${img})` }}
            aria-hidden="true"
          />
          <div className="btn-txtContainer">
           
            <div className="div">
              <h1 className="hero-title">{name}</h1>
              <p className="hero-para">{para}</p>
              <button type="button" className="hero-btn">{btnText}</button>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
