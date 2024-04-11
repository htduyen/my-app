import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "../../components/table/CustomTable";
import StickyHeadTable from "../../components/table/StickyHeaderTable";

const Dashboard = () => {
	return (
		<Grid item>
			<Paper
				sx={{
					p: 2,
					display: "flex",
					flexDirection: "column",
				}}
			>
				<CustomTable />
				<StickyHeadTable />
			</Paper>
		</Grid>
	);
};

export default Dashboard;
