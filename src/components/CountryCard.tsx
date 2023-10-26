import React, { useState } from "react";
import { Country } from "../models/country.class";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <div className="card large">
      <div className="card-image">
        <figure className="image is-16by9">
          <img src={country?.flags.svg} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img src={country?.coatOfArms.svg} alt="Coat of Arms" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-6">{country?.name.common}</p>
          </div>
        </div>
        <div className="content">{country?.name.official}</div>
      </div>
      <footer className="card-footer">
        <a href={country?.maps.googleMaps} className="card-footer-item">
          Google Maps
        </a>
        <a className="card-footer-item " onClick={openModal}>
          Learn More
        </a>
      </footer>

      <div className={`modal ${modalActive ? "is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-content">
          <div className="modal-card">
            <p>Additional information about {country?.name.common}</p>
            <p>Population: {country?.population}</p>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={closeModal}
        ></button>
      </div>
    </div>
  );
};

export default CountryCard;
