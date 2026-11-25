import ridersList from "./riderlst"

import "./index.css";




const Cards = (props) => {
  const {searchname}=props 
     
  const searchLst=ridersList.filter(each=>each.name.toLowerCase().includes(searchname.toLowerCase()))
  return (
    <section className="featured-riders" aria-labelledby="featured-riders-heading">
      
      <h1 className="featured-riders-heading" id="featured-riders-heading">
        🚨Featured Rider
      </h1>
      <div className="cards-container">
      { searchLst.map(each=>(
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
      </div>
    </section>
  );
};

export default Cards;
