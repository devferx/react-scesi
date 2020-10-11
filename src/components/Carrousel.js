import React from "react";
import playIcon from "../assets/play-icon.png";
import plusIcon from "../assets/plus-icon.png";

function Carrousel({ lista, titulo }) {
  return (
    <div>
      <h3 className="categories__title">{titulo}</h3>
      <section className="carousel">
        <div className="carousel__container">
          {lista.map((item) => (
            <div key={item.id} className="carousel-item">
              <img className="carousel-item__img" src={item.cover} alt="" />
              <div className="carousel-item__details">
                <div>
                  <img
                    className="carousel-item__details--img"
                    src={playIcon}
                    alt="Play Icon"
                  />
                  <img
                    className="carousel-item__details--img"
                    src={plusIcon}
                    alt="Plus Icon"
                  />
                </div>
                <p className="carousel-item__details--title">{item.title}</p>
                <p className="carousel-item__details--subtitle">
                  {`${item.year} ${item.contentRating} ${item.duration} minutos`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Carrousel;
