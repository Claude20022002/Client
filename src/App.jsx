import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
function App() {
    return (
        <Router>
            <Header />
            <Box
                sx={{
                    margin: "0",
                    padding: "0",
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projets" element={<Projets />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about-me" element={<AboutMe />} />
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
