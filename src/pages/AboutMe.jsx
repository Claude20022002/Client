import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    Modal,
    IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import CloseIcon from "@mui/icons-material/Close";

const skills = [
    { name: "Python", icon: "/assets/svg/python.svg" },
    { name: "React", icon: "/assets/svg/react-js.svg" },
    { name: "JavaScript", icon: "/assets/svg/javascript.svg" },
    { name: "HTML", icon: "/assets/svg/html.svg" },
    { name: "CSS", icon: "/assets/svg/css.svg" },
    { name: "MongoDB", icon: "/assets/svg/mongodb.svg" },
    { name: "Ubuntu", icon: "/assets/svg/ubuntu.svg" },
    { name: "PHP", icon: "/assets/svg/php.svg" },
    { name: "Linux", icon: "/assets/svg/linux.svg" },
    { name: "jQuery", icon: "/assets/svg/jquery.svg" },
    { name: "Java", icon: "/assets/svg/java.svg" },
    { name: "C", icon: "/assets/svg/C.svg" },
    { name: "SASS", icon: "/assets/svg/sass.svg" },
    { name: "TypeScript", icon: "/assets/svg/typescript.svg" },
    { name: "Node.js", icon: "/assets/svg/nodejs.svg" },
    { name: "Express", icon: "/assets/svg/express.svg" },
    { name: "GitHub", icon: "/assets/svg/github.svg" },
    { name: "MUI-JS", icon: "/assets/svg/mui.svg" },
    { name: "Tailwind CSS", icon: "/assets/svg/tailwind.svg" },
    { name: "MySQL", icon: "/assets/svg/mysql.svg" },
];

const experiences = [
    { year: "2024", title: "Telemarketer", company: "MD CALLCENTER" },
    { year: "2023", title: "Technical Assistant", company: "STI Company" },
    {
        year: "2023-2024",
        title: "Active Member",
        company: "HESTIM Code Masters",
    },
];

const AboutMe = () => {
    const [activeSection, setActiveSection] = useState("skills");
    const [openPreview, setOpenPreview] = useState(false);

    const handleDownload = () => {
        window.open("/others/Curriculum-Vitae.pdf", "_blank");
    };

    return (
        <Container maxWidth="xl" sx={{ minHeight: "100vh", py: 4 }}>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        gap: 4,
                        mb: 8,
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Box
                            component="img"
                            src="/assets/images/IMG_7418.JPG"
                            alt="Profile"
                            sx={{
                                width: { xs: 200, md: 300 },
                                height: { xs: 200, md: 300 },
                                borderRadius:
                                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                                objectFit: "cover",
                                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                                border: "4px solid rgba(255, 255, 255, 0.18)",
                            }}
                        />
                    </motion.div>

                    <Box sx={{ maxWidth: 600 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 800,
                                    mb: 2,
                                    background:
                                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Claudia Lusamote
                            </Typography>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Typography
                                    variant="h5"
                                    color="text.secondary"
                                    sx={{ mb: 3 }}
                                >
                                    Junior Web & Software Developer
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{ mb: 4, color: "white" }}
                                >
                                    Passionate about web development and
                                    creating innovative applications. I
                                    constantly strive to learn new technologies
                                    and take on exciting technical challenges.
                                </Typography>
                            </motion.div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setOpenPreview(true)}
                                style={{
                                    background:
                                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                                    border: "none",
                                    padding: "12px 24px",
                                    borderRadius: "25px",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    cursor: "pointer",
                                    boxShadow:
                                        "0 4px 15px rgba(33, 150, 243, 0.3)",
                                }}
                            >
                                <DownloadIcon /> Preview CV
                            </motion.button>
                        </motion.div>
                    </Box>
                </Box>
            </motion.div>

            {/* Navigation des sections */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                {["skills", "experience"].map((section) => (
                    <motion.button
                        key={section}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveSection(section)}
                        style={{
                            background:
                                activeSection === section
                                    ? "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
                                    : "transparent",
                            border: "2px solid #2196F3",
                            padding: "8px 24px",
                            margin: "0 8px",
                            borderRadius: "20px",
                            color: "white",
                            cursor: "pointer",
                            textTransform: "capitalize",
                        }}
                    >
                        {section}
                    </motion.button>
                ))}
            </Box>

            {/* Contenu dynamique */}
            <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                {activeSection === "skills" ? (
                    <Grid container spacing={3} justifyContent="center">
                        {skills.map((skill, index) => (
                            <Grid item key={skill.name}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    <Card
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background:
                                                "rgba(255, 255, 255, 0.05)",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                            borderRadius: "15px",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-5px)",
                                                boxShadow:
                                                    "0 8px 25px rgba(33, 150, 243, 0.2)",
                                            },
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={skill.icon}
                                            alt={skill.name}
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                mb: 1,
                                                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                                            }}
                                        />
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: "white",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {skill.name}
                                        </Typography>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Grid container spacing={3}>
                        {experiences.map((exp, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <Card
                                        sx={{
                                            p: 3,
                                            background:
                                                "rgba(255, 255, 255, 0.05)",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                            borderRadius: "15px",
                                            height: "100%",
                                        }}
                                    >
                                        <WorkIcon
                                            sx={{
                                                fontSize: 40,
                                                mb: 2,
                                                color: "#2196F3",
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{ color: "white", mb: 1 }}
                                        >
                                            {exp.title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            sx={{ mb: 1 }}
                                        >
                                            {exp.company}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#21CBF3" }}
                                        >
                                            {exp.year}
                                        </Typography>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </motion.div>

            {/* Modal de prévisualisation du CV */}
            <AnimatePresence>
                {openPreview && (
                    <Modal
                        open={openPreview}
                        onClose={() => setOpenPreview(false)}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            style={{
                                position: "relative",
                                width: "90%",
                                maxWidth: "800px",
                                maxHeight: "90vh",
                                backgroundColor: "rgba(18, 18, 18, 0.95)",
                                borderRadius: "15px",
                                padding: "20px",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                        >
                            <motion.div
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    zIndex: 1,
                                }}
                            >
                                <IconButton
                                    onClick={() => setOpenPreview(false)}
                                    sx={{ color: "white" }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </motion.div>

                            <Box
                                sx={{
                                    height: "calc(100vh - 200px)",
                                    overflow: "hidden",
                                }}
                            >
                                <motion.iframe
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    src="/others/Curriculum-Vitae.pdf"
                                    width="100%"
                                    height="100%"
                                    style={{ border: "none" }}
                                />
                            </Box>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "20px",
                                }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleDownload}
                                    style={{
                                        background:
                                            "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                                        border: "none",
                                        padding: "12px 24px",
                                        borderRadius: "25px",
                                        color: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        cursor: "pointer",
                                        boxShadow:
                                            "0 4px 15px rgba(33, 150, 243, 0.3)",
                                    }}
                                >
                                    <DownloadIcon /> Download CV
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </Modal>
                )}
            </AnimatePresence>
        </Container>
    );
};

export default AboutMe;
