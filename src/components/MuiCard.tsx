import React from "react";
import {
	Box,
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	CardMedia,
} from "@mui/material";

const MuiCard = () => {
	return (
		<Box width={"300px"}>
			<Card>
				<CardMedia
					component={"img"}
					// height="140"
					image="https://source.unsplash.com/random"
					alt="unsplash image"
				/>
				<CardContent>
					<Typography variant="h4" component={"div"}>
						React
					</Typography>
					<Typography variant="body2" color={"text.secondary"}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Reiciendis, deserunt.
					</Typography>
				</CardContent>
				<CardActions>
					<Button>Share</Button>
					<Button>Learn more</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default MuiCard;
