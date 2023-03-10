import React from "react";

const Button = () => {
  return (
    <>
      <a href="./public/menu.html">
        <button className="btn btn-primary btn-lg" type="button">
          Quiero mi Galleta!
        </button>
      </a>
    </>
  );
};

const Body = () => {
  return (
    <>
      <p className="col-md-8 fs-4">
        Hola! Me llamo Gala, me encanta hacer felices a todos, es por eso que
        hago galletas! Estan deeeeeeeliciosas 😋
        <br />
        Ya las probaste?
      </p>
    </>
  );
};

const Display = () => {
  return (
    <>
      <h1 className="display-5 fw-bold">Bienvenidos a Gala Galletas!</h1>
    </>
  );
};
const Jumbotron = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <Display />
          <Body />
          <Button />
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
