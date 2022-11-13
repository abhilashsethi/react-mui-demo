import React from "react";
import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
	return (
		<Stack spacing={4} m={5} direction={"row"}>
			<Badge badgeContent={5} color="primary">
				<MailIcon />
			</Badge>
			<Badge badgeContent={1000} color="secondary" max={999}>
				<MailIcon />
			</Badge>
			<Badge variant="dot" color="secondary" max={999}>
				<MailIcon />
			</Badge>
		</Stack>
	);
};

export default MuiBadge;
