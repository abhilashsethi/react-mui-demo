import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

const MuiTextField = () => {
	const [value, setValue] = useState("");

	return (
		<div className="flex justify-center items-center w-full h-screen px-20">
			<Stack spacing={4}>
				<Stack direction={"row"} spacing={2}>
					<TextField label="name" variant="outlined" />
					<TextField label="name" variant="filled" />
					<TextField label="name" variant="standard" />
				</Stack>
				<Stack direction={"row"} spacing={2}>
					<TextField
						label="secondary small"
						size="small"
						color="secondary"
						variant="outlined"
					/>
					<TextField label="Form input" variant="outlined" required />
					<TextField
						label="Form input"
						variant="outlined"
						helperText={!value ? "Required" : "Please fill the field"}
						value={value}
						onChange={(e: any) => setValue(e.target.value)}
						error={!value}
					/>
					<TextField
						type={"password"}
						label="Password input"
						disabled={true}
						variant="outlined"
						helperText="Fill this field"
					/>

					<TextField label="Read Only" inputProps={{ readOnly: true }} />
				</Stack>
				<Stack direction={"row"} spacing={2}>
					<TextField
						label="Amount"
						variant="outlined"
						inputProps={{
							startAdornment: (
								<InputAdornment position="start">$</InputAdornment>
							),
						}}
					/>
					<TextField
						label="Weight"
						variant="outlined"
						inputProps={{
							endAdornment: <InputAdornment position="end">kg</InputAdornment>,
						}}
					/>
				</Stack>
			</Stack>
		</div>
	);
};

export default MuiTextField;
