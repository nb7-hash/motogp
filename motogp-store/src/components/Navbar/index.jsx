import { Component } from "react";
import "./index.css";


const lst = [
  {
    id: 1,
    links: "Home",
  },
  {
    id: 2,
    links: "Riders",
  },
  {
    id: 3,
    links: "Store",
  },
  {
    id: 4,
    links: "Races",
  },
  {
    id: 5,
    links: "About",
  },
];
class Navbar extends Component {
  state = {
    isMenuOpen: false,
    isIcon:false
  };

  toggleMenu = () => {
    this.setState((state) => ({ isMenuOpen: !state.isMenuOpen }));
  };
  togglebtn=()=>{
    this.setState(prev=>({isIcon:!prev.isIcon}))
  }

  render() {
    const { isMenuOpen ,isIcon} = this.state;

    return (
     
        <nav className="Nav-container" style={{backgroundImage:!isIcon?"linear-gradient(135deg, #cb3d3d 0%, #141414 50%, #090909 100%)":"linear-gradient(360deg, #1a0a0a 0%, #400a0a 100%)"}}>
          <div className="navbar-header">
            <div className="logo-container">
              <div className="logo">
                <img
                  src="https://res.cloudinary.com/dkvjzljuz/image/upload/v1794378019/m_odedga.jpg"
                  className="logo-size"
                  alt="MotoGP"
                />
              </div>
            </div>

            <div className={`action-buttons${isMenuOpen ? " open" : ""}`}>
              <button type="button" onClick={this.togglebtn}>{isIcon?(<i class="fa-solid fa-moon"></i>):(<i class="fa-solid fa-lightbulb"></i>)}</button>
              <button type="button"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>

            <button
              type="button"
              className="hamburger-button"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
              onClick={this.toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <ul className={`list-container${isMenuOpen ? " open" : ""}`}>
            {lst.map((each) => (
              <li key={each.id}>{each.links}</li>
            ))}
          </ul>

          <div className={`input-container${isMenuOpen ? " open" : ""}`}>
            <div>
              <input type="search" placeholder="Search" />
            </div>
          
          </div>
        </nav>
     
      
    );
  }
}

export default Navbar;
