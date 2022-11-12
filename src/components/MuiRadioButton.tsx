import React, { useState } from "react";
import {
	Box,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@mui/material";

const MuiRadioButton = () => {
	const [value, setValue] = useState("");
	console.log({
		value,
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return (
		<Box>
			<FormControl>
				<FormLabel id="job-experience">Years Of Experience</FormLabel>
				<RadioGroup
					name="job-group"
					aria-labelledby="job-experience"
					value={value}
					onChange={handleChange}
					row
				>
					<FormControlLabel control={<Radio />} label="0-2" value={"0-2"} />
					<FormControlLabel control={<Radio />} label="3-5" value={"3-5"} />
					<FormControlLabel control={<Radio />} label="6-10" value={"6-10"} />
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default MuiRadioButton;
