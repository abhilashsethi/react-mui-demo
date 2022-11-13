import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";

const MuiRatings = () => {
	const [value, setValue] = useState<number | null>(null);
	console.log({
		value,
	});
	const handleChange = (
		_event: React.ChangeEvent<{}>,
		newValue: number | null
	) => {
		setValue(newValue);
	};
	return (
		<Stack spacing={4}>
			<Rating value={value} onChange={handleChange} precision={0.5} />
		</Stack>
	);
};

export default MuiRatings;
