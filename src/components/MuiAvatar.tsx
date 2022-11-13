import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";

const MuiAvatar = () => {
	return (
		<Stack spacing={4}>
			<Stack direction={"row"} spacing={1}>
				<Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
				<Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
			</Stack>
			<Stack direction={"row"} spacing={1}>
				<AvatarGroup>
					<Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
					<Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
					<Avatar src="https://randomuser.me/api/portraits/women/79.jpg">
						CK
					</Avatar>
					<Avatar src="https://randomuser.me/api/portraits/men/51.jpg">
						CK
					</Avatar>
				</AvatarGroup>
			</Stack>
		</Stack>
	);
};

export default MuiAvatar;
