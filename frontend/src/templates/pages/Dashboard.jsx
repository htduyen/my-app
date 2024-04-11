import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";

import AppBar from "../../components/AppBar";
import Drawer from "../../components/Drawer";
import Chart from "./Chart";
import Clients from "./Cients";
import Deposits from "./Depsits";
import Rooms from "./Rooms";

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar toggle={toggleDrawer} open={open} />
				<Drawer toggle={toggleDrawer} open={open} />
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
					}}
				>
					<Toolbar />
					<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
						<Grid container spacing={3}>
							{/* Chart */}
							<Grid item xs={12} md={8} lg={9}>
								<Paper
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
										height: 240,
									}}
								>
									<Chart />
								</Paper>
							</Grid>
							{/* Recent Deposits */}
							<Grid item xs={12} md={4} lg={3}>
								<Paper
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
										height: 240,
									}}
								>
									<Deposits />
								</Paper>
							</Grid>
							{/* Recent Orders */}
							<Grid item xs={12}>
								<Paper
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
									}}
								>
									<Rooms />
								</Paper>
							</Grid>
							<Grid item xs={12}>
								<Paper
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
									}}
								>
									<Clients />
								</Paper>
							</Grid>
						</Grid>
						<Copyright sx={{ pt: 4 }} />
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
