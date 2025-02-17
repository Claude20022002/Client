import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Page404 from "./pages/Page404";

function App() {
    return (
        <Router basename="/Client">
            <Header />
            <Box
                sx={{
                    margin: "0",
                    padding: "0 16px",
                    width: "100%",
                    minHeight: "100vh",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projets" element={<Projets />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
