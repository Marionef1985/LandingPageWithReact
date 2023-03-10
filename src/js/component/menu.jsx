import React from "react";

const CardMenu = (props) => {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img
            src={props.imageSRC}
            className="card-img-top"
            alt={props.imageAlt}
          />
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardText}</p>
            <a href={props.buttonURL} className="btn btn-primary">
              Go!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Menu = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
      </div>
      ;
    </>
  );
};

export default Menu;

CardMenu.propTypes = {
  imageSRC: PropTypes.string,
  imageAlt: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  buttonURL: PropTypes.string,
};
