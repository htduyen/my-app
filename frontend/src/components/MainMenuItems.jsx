import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const MainMenuItems = () => {
	let navigate = useNavigate();
	return (
		<Fragment>
			<ListItemButton onClick={() => navigate("/")}>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItemButton>
			<ListItemButton onClick={() => navigate("/orders")}>
				<ListItemIcon>
					<ShoppingCartIcon />
				</ListItemIcon>
				<ListItemText primary="Orders" />
			</ListItemButton>
			<ListItemButton onClick={() => navigate("/customers")}>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="Customers" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<BarChartIcon />
				</ListItemIcon>
				<ListItemText primary="Reports" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary="Integrations" />
			</ListItemButton>
		</Fragment>
	);
};

export const SecondaryMenuItems = () => {
	return (
		<Fragment>
			<ListSubheader component="div" inset>
				Saved reports
			</ListSubheader>
			<ListItemButton>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="Current month" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="Last quarter" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="Year-end sale" />
			</ListItemButton>
		</Fragment>
	);
};

export default MainMenuItems;
