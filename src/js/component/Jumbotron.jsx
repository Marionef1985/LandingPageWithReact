import React from "react";

const Jumbotron = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          <p className="col-md-8 fs-4">
          Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Call to action! 
          </button>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
