import { Route, Routes } from "react-router-dom";
import Dashboard from "./templates/pages/Dashboard";
import SignIn from "./templates/pages/SignIn";
import SignUp from "./templates/pages/SignUp";
import ForgotPassword from "./templates/pages/ForgotPassword";
import NoPage from "./templates/pages/NoPage";

function App() {
	// const [message, setMessage] = useState("");

	// useEffect(() => {
	// 	fetch("/api/hello")
	// 		.then((response) => response.json())
	// 		.then((data) => setMessage(data.message));
	// }, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Dashboard></Dashboard>} />
				<Route path="/sign-in" element={<SignIn></SignIn>} />
				<Route path="/sign-up" element={<SignUp></SignUp>} />
				<Route
					path="/reset-password"
					element={<ForgotPassword></ForgotPassword>}
				/>
				<Route path="/*" element={<NoPage></NoPage>} />
			</Routes>
		</div>
	);
}
export default App;
