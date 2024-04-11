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
function createData(
	id,
	dateHired,
	name,
	dateOfBirth,
	placeOfOrigin,
	roomNumber,
	price,
	status
) {
	return {
		id,
		dateHired,
		name,
		dateOfBirth,
		placeOfOrigin,
		roomNumber,
		price,
		status,
	};
}

const rows = [
	createData(
		0,
		"16 Mar, 2019",
		"Huỳnh Thanh Duyên",
		"1997",
		"Chợ Gạo, Tiền Giang",
		"1",
		312.44,
		"Đang thuê"
	),
];

function preventDefault(event) {
	event.preventDefault();
}

export default function Clients() {
	return (
		<Fragment>
			<Title>Khách thuê</Title>
			<Table size="medium">
				<TableHead>
					<TableRow>
						<TableCell>Ngày thuê</TableCell>
						<TableCell>Họ & Tên</TableCell>
						<TableCell>Năm sinh</TableCell>
						<TableCell>Địa chỉ</TableCell>
						<TableCell>Phòng</TableCell>
						<TableCell>Trạng thái</TableCell>
						<TableCell>Hành động</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.dateHired}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.dateOfBirth}</TableCell>
							<TableCell>{row.placeOfOrigin}</TableCell>
							<TableCell>{row.roomNumber}</TableCell>
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
				See more Clients
			</Link>
		</Fragment>
	);
}
