import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <>
      <a href={props.buttonURL} className="btn btn-primary">
        Lo quiero!
      </a>
    </>
  );
};

const Text = (props) => {
  return (
    <>
      <p className="card-text">{props.cardText}</p>
    </>
  );
};

const Title = (props) => {
  return (
    <>
      <h5 className="card-title pt-3">{props.cardTitle}</h5>
    </>
  );
};

const Image = (props) => {
  return (
    <>
      <img
        src={props.src}
        className="card-img-top cardImages"
        alt={props.alt}
      />
    </>
  );
};

const Card = (props) => {
  return (
    <>
      <div className="col-sm-4">
        <div className="card text-center">
          <Image src={props.imageURL} alt={props.imageALT} />
          <Title cardTitle={props.cardTitle}/>
          <Text cardText={props.cardText}/>
          <Button href={props.buttonURL} />
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

Image.propTypes = {
  imageURL: PropTypes.string,
  imageALT: PropTypes.string,
};

Title.propTypes = {
  cardTitle: PropTypes.string,
};

Text.propTypes = {
  cardText: PropTypes.string,
};

Button.propTypes = {
  buttonURL: PropTypes.string,
};
