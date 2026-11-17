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
            <h2 className="rider-name">{each.name}</h2>
            <div className="tagcontainer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQny0-9hAYoTTi0xHQAsB8FbZMLDqLEEtMts2fI1nNxlHW9b9U5NGAXq9ho&s=10"
                className="flag-size"
                alt="Flag of Spain"
              />
              <p>
                {each.country} |<span>{each.team}</span>
              </p>
            </div>

            <button className="btns">View Profile-</button>
          </div>
          <div className="img-container">
            <img
              src="https://resources.motogp.pulselive.com/photo-resources/2026/07/03/b5f58e67-9b76-4e70-93c6-6672a6abc649/L0F4WbbF.png?height=400&width=600"
              className="ims"
              alt="Marc Márquez"
            />
          </div>
        </div>
))}
    </section>
  );
};

export default Cards;
