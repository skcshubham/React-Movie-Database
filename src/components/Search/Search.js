import React from "react";
import SearchStyles from "./SearchStyles";
import { TextField, Grid, Button } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";

const Search = () => {
	const classes = SearchStyles();
	return (
		<Grid container justify="center">
			<form className={classes.root} noValidate autoComplete="off">
				<TextField id="outlined-basic" label="Movie name" variant="outlined" />
				<Button
					className={classes.button}
					size="medium"
					variant="contained"
					color="primary"
					startIcon={<SearchRounded />}
				>
					Search
				</Button>
			</form>
		</Grid>
	);
};

export default Search;
