import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./templates/layout/Layout";
import Blogs from "./templates/pages/Blogs";
import Contact from "./templates/pages/Contact";
import Home from "./templates/pages/Home";
import NoPage from "./templates/pages/NoPage";
import Dashboard from "./templates/pages/Dashboard";

function App() {
	const [message, setMessage] = useState("");

	// useEffect(() => {
	// 	fetch("/api/hello")
	// 		.then((response) => response.json())
	// 		.then((data) => setMessage(data.message));
	// }, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/home" element={<Home />} />
						<Route path="blogs" element={<Blogs />} />
						<Route path="contact" element={<Contact />} />
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
