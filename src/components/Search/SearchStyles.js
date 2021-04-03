import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	button: {
		height: "75%",
	},
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));
