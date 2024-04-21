import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { Avatar, Divider, ListItemIcon, MenuItem } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		handleClose();
		navigate("/sign-in");
	};
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
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
					<Badge badgeContent={4} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<IconButton color="inherit">
					<Badge badgeContent={4} color="secondary">
						<EmailIcon />
					</Badge>
				</IconButton>
				<IconButton
					edge="end"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleMenu}
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				{/* <IconButton color="inherit">
					<AccountCircleIcon />
				</IconButton> */}
				<Menu
					id="menu-appbar"
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					KeepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose} sx={{ gap: "15px" }}>
						<ListItemIcon>
							<Avatar fontSize="small" />
						</ListItemIcon>
						Profile
					</MenuItem>
					<Divider />
					<MenuItem onClick={handleClose}>
						<ListItemIcon>
							<PersonAdd fontSize="small" />
						</ListItemIcon>
						Add another account
					</MenuItem>
					<MenuItem onClick={handleLogout}>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						Logout
					</MenuItem>
					{/* Add more MenuItems here */}
				</Menu>
			</Toolbar>
		</AppBarStyled>
	);
};

export default AppBar;
