import React from "react";

const Contact = () => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Contact
        </a>
      </li>
    </>
  );
};

const Services = () => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Services
        </a>
      </li>
    </>
  );
};

const About = () => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="#">
          About
        </a>
      </li>
    </>
  );
};

const Home = () => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
    </>
  );
};

const MenuNavBar = () => {
  return (
    <>
      <ul className="navbar-nav">
        <Home />
        <About />
        <Services />
        <Contact />
      </ul>
    </>
  );
};

const TheCookieMonsterButton = () => {
  return (
    <>
      <a className="navbar-brand ms-2" href="#">
        The Cookie Monster 🍪
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  );
};

const NavBarElements = () => {
  return (
    <>
      <div className="container-fluid m-0">
        <TheCookieMonsterButton />
      </div>
      <div className="nav justify-content-end">
        <div className="collapse navbar-collapse m-1 me-2" id="navbarNav">
          <MenuNavBar />
        </div>
      </div>
    </>
  );
};

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavBarElements />
      </nav>
    </>
  );
};

export default NavBar;
