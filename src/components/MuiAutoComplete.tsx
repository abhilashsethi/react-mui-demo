import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const MuiAutoComplete = () => {
	type Skill = {
		id: number;
		label: string;
	};

	const skillOptions = skills.map((skill, index) => ({
		id: index + 1,
		label: skill,
	}));

	const [value, setValue] = useState<string | null>(null);
	const [skill, setSkill] = useState<Skill | null>(null);
	console.log({
		value,
	});
	console.log({
		skill,
	});
	return (
		<Stack spacing={4} width={250}>
			<Autocomplete
				options={skills}
				value={value}
				onChange={(e: any, newValue: null | string) => setValue(newValue)}
				renderInput={(params) => <TextField {...params} label="skills" />}
				freeSolo
			/>
			<Autocomplete
				options={skillOptions}
				value={skill}
				onChange={(e: any, newValue: Skill | null) => setSkill(newValue)}
				renderInput={(params) => <TextField {...params} label="skills" />}
				// freeSolo
			/>
		</Stack>
	);
};

export default MuiAutoComplete;
