import { Component } from "react";
import photolst from "./photlst";
import "./index.css";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery-container">
        <div className="photo-txt">
          <h1>Photo Gallery</h1>
          <p>Feel the speed.Relieve the moments</p>
        </div>
        <div className="photo-moment-btn">
          <button className="photo-btn">All photos</button>
        </div>
        <div className="photo-grid">
          {photolst.map((each) => (
            <div
              className="phot-card"
              key={each.id}
              style={{ backgroundImage: `url("${each.image}")` }}
            >
              <div className="photo-tag">
                <div>
                  <i className="fa-solid fa-camera fa-sm"></i>
                  <p className="line">_____</p>
                </div>
                <div>
                  <p>{each.tagName}</p>
                  <p>{each.teamName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
