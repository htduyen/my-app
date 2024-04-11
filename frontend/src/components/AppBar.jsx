import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";

const drawerWidth = 240;
const AppBarStyled = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const AppBar = ({ toggle, open }) => {
	return (
		<AppBarStyled position="absolute" open={open}>
			<Toolbar
				sx={{
					pr: "24px", // keep right padding when drawer closed
				}}
			>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={toggle}
					sx={{
						marginRight: "36px",
						...(open && { display: "none" }),
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component="h1"
					variant="h6"
					color="inherit"
					noWrap
					sx={{ flexGrow: 1 }}
				>
					Dashboard
				</Typography>
				<IconButton color="inherit">
					<Stack direction="row" spacing={2}>
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
						<Badge badgeContent={4} color="secondary">
							<EmailIcon />
						</Badge>
					</Stack>
				</IconButton>
			</Toolbar>
		</AppBarStyled>
	);
};

export default AppBar;
