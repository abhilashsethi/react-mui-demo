import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from "@mui/icons-material/Edit";
const MuiSpeedDial = () => {
	return (
		<SpeedDial
			ariaLabel="speed dial navigation"
			sx={{ position: "absolute", top: 16, right: 16 }}
			icon={<SpeedDialIcon openIcon={<EditIcon />} />}
		>
			<SpeedDialAction
				icon={<FileCopyIcon />}
				tooltipTitle="Copy"
				tooltipOpen
			/>
			<SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen />
			<SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen />
		</SpeedDial>
	);
};

export default MuiSpeedDial;
