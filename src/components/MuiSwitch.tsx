import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = () => {
	const [checked, setChecked] = useState(false);
	console.log({
		checked,
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
	};
	return (
		<Box>
			<FormControlLabel
				label="Dark Mode"
				control={<Switch checked={checked} onChange={handleChange} />}
			/>
		</Box>
	);
};

export default MuiSwitch;
