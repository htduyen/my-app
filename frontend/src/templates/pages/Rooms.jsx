import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Fragment } from "react";
import Title from "./Title";
import IconButton from "@mui/material/IconButton";

// Generate Order Data
function createData(id, place, dateOfHired, clientName, price, status) {
	return {
		id,
		place,
		dateOfHired,
		clientName,
		price,
		status,
	};
}

const rows = [
	createData(
		1,
		"Ninh Kieu, Cần Thơ",
		"16 Mar, 2019",
		"Huỳnh Thanh Duyên",
		"2.000.000đ",
		"Đang thuê"
	),
];

function preventDefault(event) {
	event.preventDefault();
}

export default function Rooms() {
	return (
		<Fragment>
			<Title>Phòng</Title>
			<Table size="medium">
				<TableHead>
					<TableRow>
						<TableCell>Số phòng</TableCell>
						<TableCell>Họ & Tên Khách</TableCell>
						<TableCell>Ngày thuê</TableCell>
						<TableCell>Gía thuê</TableCell>
						<TableCell>Trạng thái</TableCell>
						<TableCell>Hành động</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.clientName}</TableCell>
							<TableCell>{row.dateOfHired}</TableCell>
							<TableCell>{row.price}</TableCell>
							<TableCell>{row.status}</TableCell>
							<TableCell>
								<Stack direction="row" spacing={2}>
									<IconButton
										aria-label="delete"
										onClick={() => {}}
									>
										<RemoveRedEyeIcon color="primary" />
									</IconButton>
									<IconButton
										aria-label="delete"
										onClick={() => {}}
									>
										<BorderColorIcon color="secondary" />
									</IconButton>
									<IconButton
										aria-label="delete"
										onClick={() => {}}
									>
										<PersonRemoveRoundedIcon color="error" />
									</IconButton>
								</Stack>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Link
				color="primary"
				href="#"
				onClick={preventDefault}
				sx={{ mt: 3 }}
			>
				See more Rooms
			</Link>
		</Fragment>
	);
}
