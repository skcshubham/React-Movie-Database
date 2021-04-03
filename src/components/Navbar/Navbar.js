import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import NavbarStyles from "./NavbarStyles";

function Navbar() {
	const classes = NavbarStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					/>
					<Typography className={classes.title} variant="h6" noWrap>
						React Movie Database
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
