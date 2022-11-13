import React, { useState } from "react";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordian = () => {
	const [expanded, setExpanded] = useState<string | false>(false);
	const handleChange = (isExpanded: boolean, panel: string) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					id="panel1-header"
					aria-controls="panel1-content"
				>
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
						expedita quis debitis alias voluptatum cum magni, corrupti similique
						incidunt eius iure modi sunt magnam porro perferendis nesciunt
						praesentium ea vel.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					id="panel2-header"
					aria-controls="panel2-content"
				>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
						expedita quis debitis alias voluptatum cum magni, corrupti similique
						incidunt eius iure modi sunt magnam porro perferendis nesciunt
						praesentium ea vel.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					id="panel3-header"
					aria-controls="panel3-content"
				>
					<Typography>Accordion 3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
						expedita quis debitis alias voluptatum cum magni, corrupti similique
						incidunt eius iure modi sunt magnam porro perferendis nesciunt
						praesentium ea vel.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default MuiAccordian;
