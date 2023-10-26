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
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{country?.name.official}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={closeModal}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="hero">
              <p className="image">
                <img src={country?.flags.svg} alt="Country Flag" />
              </p>
            </div>
            <div className="level" style={{ marginTop: "1rem" }}>
              <div className="level-item is-mobile has-text-centered">
                <div>
                  <p className="heading">Region</p>
                  <p className="title">{country?.region}</p>
                </div>
              </div>
              <div className="level-item is-mobile has-text-centered">
                <div>
                  <p className="heading">CCA3</p>
                  <p className="title">
                    {country?.cca3 ? country?.cca3 : "N/A"}
                  </p>
                </div>
              </div>
              <div className="level-item is-mobile has-text-centered">
                <div>
                  <p className="heading">Population</p>
                  <p className="title">
                    {country?.population.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="level">
              <div>
                <h3 className="title is-3">Summary</h3>
                <p>
                  The {country?.name.official} ({country?.ccn3}) is located in{" "}
                  {country?.subregion} with a population of approximately{" "}
                  {country?.population.toLocaleString()}.The language(s) spoken
                  within the country are{" "}
                  {Object.values(country?.languages).join(", ")}.
                </p>
              </div>
            </div>
          </section>

          <footer className="modal-card-foot"></footer>
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
