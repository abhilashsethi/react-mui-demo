import React from "react";
import { Box, Stack, Divider, Grid } from "@mui/material";

const MuiLayout = () => {
	return (
		<>
			<Stack
				sx={{
					border: "1px solid",
				}}
				direction="row"
				spacing={2}
				divider={<Divider orientation="vertical" flexItem />}
			>
				<Box
					component={"h1"}
					sx={{
						backgroundColor: "primary.main",
						color: "white",
						height: "100px",
						width: "100px",
						padding: "16px",
						"&:hover": {
							backgroundColor: "primary.light",
						},
					}}
				>
					Abhilash
				</Box>
				<Box
					display="flex"
					height={"100px"}
					width={"100px"}
					bgcolor={"success.light"}
					p={2}
				></Box>
			</Stack>
			<Grid container my={2} spacing={2}>
				<Grid item xs={12} sm={6}>
					<Box bgcolor={"primary.light"} p={2}>
						Item1
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box bgcolor={"primary.light"} p={2}>
						Item2
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box bgcolor={"primary.light"} p={2}>
						Item3
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box bgcolor={"primary.light"} p={2}>
						Item4
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default MuiLayout;
