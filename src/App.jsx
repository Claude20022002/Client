import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <Header />
            <Container>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projets" element={<Projets />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Box>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
