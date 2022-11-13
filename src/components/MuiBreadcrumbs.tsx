import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const MuiBreadcrumbs = () => {
	return (
		<Box m={2}>
			<Breadcrumbs
				maxItems={2}
				separator={<NavigateNextIcon fontSize="small" />}
			>
				<Link underline="hover" href="#">
					Home
				</Link>
				<Link underline="hover" href="#">
					Catalogue
				</Link>
				<Link underline="hover" href="#">
					Accessories
				</Link>
				<Typography color={"text.primary"}>Shoes</Typography>
			</Breadcrumbs>
		</Box>
	);
};

export default MuiBreadcrumbs;
