import PropTypes from "prop-types";

const BookingIcon = ({ className = "" }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`lucide lucide-notebook-pen ${className}`}
		>
			<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
			<path d="M2 6h4" />
			<path d="M2 10h4" />
			<path d="M2 14h4" />
			<path d="M2 18h4" />
			<path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z" />
		</svg>
	);
};

BookingIcon.propTypes = {
	className: PropTypes.string,
};

export default BookingIcon;
