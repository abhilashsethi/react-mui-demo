import React, { useState } from "react";
import {
	Box,
	FormControlLabel,
	Checkbox,
	FormControl,
	FormLabel,
	FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckBox = () => {
	const [checked, setChecked] = useState(false);
	const [skills, setSkills] = useState<string[]>([]);
	console.log({
		checked,
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
	};
	const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const index = skills.indexOf(e.target.value);
		if (index === -1) {
			setSkills([...skills, e.target.value]);
		} else {
			setSkills(skills.filter((skill) => skill !== e.target.value));
		}
	};
	console.log({ skills });
	return (
		<Box>
			<Box>
				<FormControlLabel
					control={<Checkbox checked={checked} onChange={handleChange} />}
					label="I accept the terms and condition"
				/>
			</Box>
			<Box>
				<Checkbox
					icon={<BookmarkBorderIcon />}
					checkedIcon={<BookmarkIcon />}
					checked={checked}
					onChange={handleChange}
				/>
			</Box>
			<Box>
				<FormControl>
					<FormLabel>Your Skills</FormLabel>
					<FormGroup row>
						<FormControlLabel
							control={
								<Checkbox
									value={"html"}
									checked={skills.includes("html")}
									onChange={handleSkillChange}
								/>
							}
							label="HTML"
						/>
						<FormControlLabel
							control={
								<Checkbox
									value={"css"}
									checked={skills.includes("css")}
									onChange={handleSkillChange}
								/>
							}
							label="CSS"
						/>
						<FormControlLabel
							control={
								<Checkbox
									value={"js"}
									checked={skills.includes("js")}
									onChange={handleSkillChange}
								/>
							}
							label="JS"
						/>
					</FormGroup>
				</FormControl>
			</Box>
		</Box>
	);
};

export default MuiCheckBox;
