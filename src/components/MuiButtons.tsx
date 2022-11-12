import React from "react";
import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MuiButtons = () => {
	return (
		<Stack spacing={2} direction="row">
			<Button
				startIcon={<SendIcon />}
				variant="text"
				href="https://www.google.com"
			>
				Text
			</Button>

			<Button
				endIcon={<SendIcon />}
				variant="contained"
				onClick={() => alert("clicked")}
			>
				contained
			</Button>

			<Button variant="outlined">outlined</Button>
			<IconButton aria-aria-label="send" color="success" size="small">
				<SendIcon />
			</IconButton>
		</Stack>
	);
};

export default MuiButtons;
