import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <>
      <div className="col-sm-4">
        <div className="card text-center">
          <img 
            src={props.imageURL}
            className="card-img-top cardImages"
            alt={props.imageALT}
          />
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardText}</p>
          <a href={props.buttonURL} className="btn btn-primary">
            {props.buttonLabel}
          </a>
        </div>
      </div>
    </>
  );
};

const Cards = () => {
  return (
    <>
      <div className="row">
        <Card
          imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFawcVz4W5Ra_y703NWcwuCtQ-Faqa1GA1-g&usqp=CAU"
          imageALT="Galleta de Pistacho"
          cardTitle="Galleta de Pistacho con Frambuesa"
          cardText="Galleta rellena de frambuesa con chocolate, cubierto de pistacho"
          buttonURL=""
          buttonLabel="La quiero!"
        />
        <Card
          imageURL="https://d320djwtwnl5uo.cloudfront.net/recetas/share/788f3646f9a8aadb89d5b17acf6bb1a1_3_3_photo.png"
          imageALT="Galleta de Choco-chips"
          cardTitle="Galleta de Choco-chips"
          cardText="Galleta de choco-chips"
          buttonURL=""
          buttonLabel="La quiero!"
        />
        <Card
          imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSiHKDasUxyQGRREomeoXyUdAdHx1-aonReA&usqp=CAU"
          imageALT="Alfajor de almendra"
          cardTitle="Alfajor de Almendra"
          cardText="Alfajor de sablee de almendra, relleno de dulce de leche"
          buttonURL=""
          buttonLabel="Lo quiero!"
        />
      </div>
    </>
  );
};

export default Cards;

/*  */
Card.propTypes = {
  imageURL: PropTypes.string,
  imageALT: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  buttonURL: PropTypes.string,
  buttonLabel: PropTypes.string,
};
