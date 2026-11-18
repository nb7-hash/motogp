import ridersList from "./riderlst"

import "./index.css";




const Cards = () => {
 
  return (
    <section className="cards-container" aria-label="Featured rider">
      { ridersList.map(each=>(
        <div className="card" style={{borderColor:each.teamColor}}>
          <div className="content-container">
            <div className="no">
        
              <h2 className="rider-number">#{each.number}</h2>
            </div>
            <h2 className="rider-name" style={{ color: each.teamColor }}>{each.name}</h2>
            <div className="tagcontainer">
              <img
                src={each.flag}
                className="flag-size"
                alt={`Flag of ${each.country}`}
              />
              <p>
                {each.country} |<span style={{ color: each.teamColor }}>{each.team}</span>
              </p>
            </div>

            <button className="btns">View Profile-</button>
          </div>
          <div className="img-container">
            <img
              src={each.image}
              className="ims"
              alt={each.altname}
            />
          </div>
        </div>
))}
    </section>
  );
};

export default Cards;
