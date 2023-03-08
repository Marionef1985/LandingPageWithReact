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
      <p className="card-text m-1 pb-2">{props.cardText}</p>
    </>
  );
};

const Title = (props) => {
  return (
    <>
      <h5 className="card-title pt-3 m-2">{props.cardTitle}</h5>
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
      <div className="col-sm-3">
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
          imageURL="https://imgs.search.brave.com/pzZAuSrJ4CNaQjMF2q9Ko1ZueBnfUld7se-erkhc3vU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/R05Mc0Z2amdpcGY3/X1g5NTNFekl3SGFI/YSZwaWQ9QXBp"
          imageALT="Galleta de Pistacho"
          cardTitle="Galleta de Pistacho"
          cardText="Galleta rellena de frambuesa con chocolate, cubierto de pistacho"
          buttonURL=""
          buttonLabel="La quiero!"
        />
        <Card
          imageURL="https://imgs.search.brave.com/oCR5iyLglNqCdeUCyvpvYkbSBjWGYSElTPtHcRg65bI/rs:fit:626:626:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mb3RvLWdyYXRp/cy9nYWxsZXRhLWNo/aXNwYXMtY2hvY29s/YXRlLWJsYW5jby1h/aXNsYWRvXzEyMDg3/Mi02MzY5LmpwZw"
          imageALT="Galleta de Choco-chips"
          cardTitle="Galleta de Choco-chips"
          cardText="La que no puede faltar! Galleta clasica con choco-chips"
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
        <Card
          imageURL="https://imgs.search.brave.com/3TltN4XVSIHgEdG2Crc7ocYeDXFuhrGWT7PSg8jxnHU/rs:fit:960:960:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZm9vZHJl/Y2lwZXMuY28uemEv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDcvYnJvd25pZXMt/MS5qcGc"
          imageALT="Brownie de Chocolate"
          cardTitle="Brownie de Chocolate"
          cardText="Para los amantes del chocolate Brownie de chocolate con un toque de nutella"
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
