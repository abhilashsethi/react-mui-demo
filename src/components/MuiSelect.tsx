import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
	const [selected, setSelected] = useState<string[]>([]);
	console.log({
		selected,
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSelected(typeof value === "string" ? value.split(",") : value);
	};

	return (
		<Box width={"250px"}>
			<TextField
				label="Select Country"
				select
				fullWidth={true}
				value={selected}
				onChange={handleChange}
				SelectProps={{
					multiple: true,
				}}
			>
				<MenuItem value="IN">India</MenuItem>
				<MenuItem value="US">USA</MenuItem>
				<MenuItem value="AU">Australia</MenuItem>
			</TextField>
		</Box>
	);
};

export default MuiSelect;
