import { Component } from "react";

import "./index.css";

const bgUrl = [
  {
    name: "Hey",
    img: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1794503308/Gemini_Generated_Image_qsz9spqsz9spqsz9_zrqdq1.png",
  },
  {
    name: "Hi",
    img: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1794503247/Gemini_Generated_Image_2bk0oy2bk0oy2bk0_hxuhn2.png",
  },
  {
    name: "rock",
    img: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1794503288/Gemini_Generated_Image_vpswwrvpswwrvpsw_tzrole.png",
  },
];

class Hero extends Component {
    state={activeId:0}
left=()=>{
    this.setState((prev) => ({
      activeId: (prev.activeId - 1 + bgUrl.length) % bgUrl.length,
    }));
}
right=()=>{
    this.setState((prev) => ({
      activeId: (prev.activeId + 1) % bgUrl.length,
    }));
}
    
  render() {
    const {activeId}=this.state 
    const {name,img}=bgUrl[activeId]
    return (
      <div className="navbar-shell">
        <div className="card1" style={{ backgroundImage: `url(${img})` }}>
          <div className="btn-txtContainer">
            <button type="button" onClick={this.left}>Hello</button>
            <h1>{name}</h1>
          </div>
          <div className="btn">
            <button type="button" onClick={this.right}>right</button>
          </div>
        </div>
        
  
      </div>
    );
  }
}

export default Hero;
