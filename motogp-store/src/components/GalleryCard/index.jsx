import { Component } from "react";
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
          <div className="phot-card">
             <div className="photo-tag">
                  <div>
                    <i className="fa-solid fa-camera fa-sm" ></i>
                  </div>
                  <div>
                    <h5>Marc-marquez</h5>
                    <p>Ducati</p>
                  </div>
             </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
