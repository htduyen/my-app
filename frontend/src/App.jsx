import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./templates/pages/Blogs";
import NoPage from "./templates/pages/NoPage";
import Dashboard from "./templates/pages/Dashboard";

function App() {
	// const [message, setMessage] = useState("");

	// useEffect(() => {
	// 	fetch("/api/hello")
	// 		.then((response) => response.json())
	// 		.then((data) => setMessage(data.message));
	// }, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Dashboard />}>
						{/* <Route path="/dashboard" element={<Dashboard />} /> */}
						{/* <Route path="blogs" element={<Blogs />} /> */}
						{/* <Route path="deposits" element={<Deposits />} />
						<Route path="contact" element={<Contact />} /> */}
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
			{/* <header className="App-header">
        <p>Message from Flask: {message}</p>
      </header> */}
		</div>
	);
}
export default App;
