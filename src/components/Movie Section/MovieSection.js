import React, { useEffect } from "react";
import axios from "axios";
import { Typography, Grid, Paper } from "@material-ui/core";
/* import MovieList from "../Movie List/MovieList"; */
import MovieSectionStyles from "./MovieSectionStyles";

const MovieSection = () => {
	const classes = MovieSectionStyles();

	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&adult=false`;
	useEffect(() => {
		// side effect hook for API Call
		axios
			.get(url)
			.then((response) => {
				// console.log(response.data.results);
				let listOfMovies = response.data.results;
				let TopEightMovie = listOfMovies.filter((movie, index) => index < 8);
				console.log(TopEightMovie);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<React.Fragment>
			<Typography variant="h4" component="h4" className={classes.title}>
				Trending Now
			</Typography>
			<Grid container justify="center" spacing={0}>
				<Grid item xs={12} sm={6} md={4}>
					<Paper className={classes.paper}>xs=12 sm=6 md=4</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default MovieSection;
