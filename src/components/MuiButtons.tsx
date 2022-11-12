import React, { useState } from "react";
import {
	Button,
	ButtonGroup,
	IconButton,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButtons = () => {
	const [formats, setFormats] = useState<string | null>(null);

	console.log({
		formats,
	});

	const handleFormatChange = (
		_event: React.MouseEvent<HTMLElement>,
		updatedFormats: string | null
	) => {
		setFormats(updatedFormats);
	};

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
				<ButtonGroup
					variant="outlined"
					orientation="vertical"
					size={"small"}
					aria-label="alignment button group"
				>
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

			<Stack direction="row">
				<ToggleButtonGroup
					aria-label="text formatting"
					value={formats}
					onChange={handleFormatChange}
					exclusive
				>
					<ToggleButton value={"bold"} aria-label="bold">
						<FormatBoldIcon />
					</ToggleButton>
					<ToggleButton value={"italic"} aria-label="italic">
						<FormatItalicIcon />
					</ToggleButton>
					<ToggleButton value={"underlined"} aria-label="underlined">
						{" "}
						<FormatUnderlinedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	);
};

export default MuiButtons;
