import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<div className="container-fluid" id="home">
			<NavBar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
		</>
	);/*  */
};

export default Home;
