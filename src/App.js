import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Movie from "./components/Movie/Movie";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Movie />
		</div>
	);
}

export default App;
