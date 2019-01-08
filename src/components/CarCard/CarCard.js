import React, { Component } from "react";
import "./CarCard.css";
import PropTypes from "prop-types";

class Card extends Component {
  render() {
    const { name, make, model, year, available, img } = this.props.data;
    return (
      <div className="Card-card">
        <header>
          <img className="Card-image" src={img} alt="boohoo" />
          <h5 className="Card-headerText">{name}</h5>
          <p className="Card-cardText">Make: {make}</p>
          <p className="Card-cardText">Model: {model}</p>
          <p className="Card-cardText">Year: {year}</p>
          <p className="Card-cardText">Available: {available}</p>
          {available === "In Dealership" ? (
            <button className="Card-button" onClick={() => alert("hello")}>
              Buy
            </button>
          ) : null}
        </header>
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.object
};

export default Card;
