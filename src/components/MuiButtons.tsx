import React from "react";
import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MuiButtons = () => {
	return (
		<Stack
			spacing={4}
			direction="column"
			justifyContent={"center"}
			alignItems={"center"}
			className="mt-5"
		>
			<Stack spacing={2} direction="row">
				<Button
					startIcon={<SendIcon />}
					variant="text"
					href="https://www.google.com"
				>
					Text
				</Button>

				<Button
					variant="contained"
					endIcon={<SendIcon />}
					onClick={() => alert("clicked")}
				>
					contained
				</Button>

				<Button variant="outlined">outlined</Button>
				<IconButton aria-aria-label="send" color="success" size="small">
					<SendIcon />
				</IconButton>
			</Stack>

			<Stack direction="row">
				<ButtonGroup variant="outlined" orientation="vertical" size={"small"}>
					<Button
						onClick={() => {
							alert("Left Clicked");
						}}
					>
						Left
					</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>
		</Stack>
	);
};

export default MuiButtons;
