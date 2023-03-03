import React from "react";

const Card1 = () => {
  return (
    <>
      <div className="col-sm-4">
          <div className="card text-center">
            <img src="https://imgs.search.brave.com/ct-p6ew7m288WQ_2btvR6FOxqsJNMInVbTQiFGw15I8/rs:fit:280:241:1/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy90/aHVtYm5haWwvY2F0/LXR0Ni5wbmc" className="card-img-top" alt="cat" />
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card1;
