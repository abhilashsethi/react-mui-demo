import React, { useState } from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const MuiChip = () => {
	const [chips, setChips] = useState(["Chip1", "Chip2", "Chip3"]);
	const handleDelete = (chipToDelete: string) => {
		setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
	};
	return (
		<Stack m={4} direction={"row"} spacing={2}>
			<Chip label={"Chip"} color="primary" icon={<FaceIcon />} />
			<Chip
				label={"Chip outLined"}
				color="secondary"
				variant="outlined"
				size="small"
				avatar={<Avatar>V</Avatar>}
				onClick={() => alert("Clicked")}
			/>
			<Chip
				label={"Chip outLined"}
				color="secondary"
				variant="outlined"
				size="small"
				avatar={<Avatar>V</Avatar>}
				onClick={() => alert("Clicked")}
				onDelete={() => alert("Delete Clicked")}
			/>

			{chips.map((chip) => (
				<Chip label={chip} key={chip} onDelete={() => handleDelete(chip)} />
			))}
		</Stack>
	);
};

export default MuiChip;
