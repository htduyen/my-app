import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import MainMenuItems, { SecondaryMenuItems } from "./MainMenuItems";

const drawerWidth = 240;

const DrawerStyled = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	"& .MuiDrawer-paper": {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: "border-box",
		...(!open && {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

const Drawer = ({ open, toggle }) => {
	return (
		<DrawerStyled variant="permanent" open={open}>
			<Toolbar
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					px: [1],
				}}
			>
				<IconButton onClick={toggle}>
					<ChevronLeftIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<List component="nav">
				<MainMenuItems />
				<Divider sx={{ my: 1 }} />
				<SecondaryMenuItems />
			</List>
		</DrawerStyled>
	);
};

export default Drawer;
