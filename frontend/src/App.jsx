import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./templates/layout/Layout";
import Home from "./templates/pages/Home";
import Blogs from "./templates/pages/Blogs";
import Contact from "./templates/pages/Contact";
import NoPage from "./templates/pages/NoPage";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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
