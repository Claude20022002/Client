import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    IconButton,
    Modal,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";

export default function Projets() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [open, setOpen] = useState(false);
    const [hoveredStates, setHoveredStates] = useState({});

    const certifications = [
        {
            title: "Bibliothèque en ligne",
            tools: [
                "React JS",
                "Node.js",
                "MongoDB",
                "Express",
                "MUI",
                "Google Books API",
            ],
            repository: "https://github.com/Claude20022002/biblioth-que",
            ImagePreview: [
                {
                    page: 1,
                    image: "/projets/bibliothèque/page1.png",
                },
                {
                    page: 2,
                    image: "/projets/bibliothèque/page2.png",
                },
                {
                    page: 3,
                    image: "/projets/bibliothèque/page3.png",
                },
            ],
        },
        {
            title: "Formulaire login",
            tools: ["HTML", "CSS"],
            repository: "https://github.com/Claude20022002/formulaire_HTML",
            ImagePreview: [
                {
                    page: 1,
                    image: "/projets/formulaire/page1.jpg",
                },
            ],
        },
        {
            title: "GreenConvert",
            tools: [
                "React JS",
                "Node.js",
                "MySQL",
                "Express",
                "MUI",
                "CSS",
                "PhpMyAdmin",
                "WampServer",
                "Perenual API",
                "Trefle API",
            ],
            repository: "https://github.com/Claude20022002/GreenConvert",
            ImagePreview: [
                {
                    page: 1,
                    image: "/projets/greenconvert/page1.png",
                },
                {
                    page: 2,
                    image: "/projets/greenconvert/page2.png",
                },
                {
                    page: 3,
                    image: "/projets/greenconvert/page3.png",
                },
                {
                    page: 4,
                    image: "/projets/greenconvert/page4.png",
                },
                {
                    page: 5,
                    image: "/projets/greenconvert/page5.png",
                },
                {
                    page: 6,
                    image: "/projets/greenconvert/page6.png",
                },
                {
                    page: 7,
                    image: "/projets/greenconvert/page7.png",
                },
                {
                    page: 8,
                    image: "/projets/greenconvert/page8.png",
                },
                {
                    page: 9,
                    image: "/projets/greenconvert/page9.png",
                },
            ],
        },
        {
            title: "MyAnimeList",
            tools: [
                "React JS",
                "Node.js",
                "MongoDB",
                "Express",
                "MUI",
                "CSS",
                "axios",
                "Jikan API",
            ],
            repository: "https://github.com/Claude20022002/MyAnime",
            ImagePreview: [
                {
                    page: 1,
                    image: "/projets/myanime/page1.jpg",
                },
                {
                    page: 2,
                    image: "/projets/myanime/page2.jpg",
                },
                {
                    page: 3,
                    image: "/projets/myanime/page3.jpg",
                },
                {
                    page: 4,
                    image: "/projets/myanime/page4.jpg",
                },
                {
                    page: 5,
                    image: "/projets/myanime/page5.jpg",
                },
                {
                    page: 6,
                    image: "/projets/myanime/page6.jpg",
                },
                {
                    page: 7,
                    image: "/projets/myanime/page7.jpg",
                },
                {
                    page: 8,
                    image: "/projets/myanime/page8.jpg",
                },
            ],
        },
        {
            title: "weatherPlan",
            tools: [
                "HTML",
                "CSS",
                "JavaScript",
                "OpenWeatherMap API",
                "axios",
                "framer-motion",
            ],
            repository: "https://github.com/Claude20022002/weatherPlan",
            ImagePreview: [
                {
                    page: 1,
                    image: "/projets/weatherplan/page1.jpg",
                },
            ],
        },
    ];

    const handleHoverStart = (projectIndex) => {
        setHoveredStates((prev) => {
            const newState = { ...prev };
            newState[projectIndex] = setInterval(() => {
                setCurrentImageIndexes((prevIndexes) => ({
                    ...prevIndexes,
                    [projectIndex]:
                        (prevIndexes[projectIndex] + 1) %
                        certifications[projectIndex].ImagePreview.length,
                }));
            }, 2000); // Change image every 2 seconds while hovering
            return newState;
        });
    };

    const handleHoverEnd = (projectIndex) => {
        if (hoveredStates[projectIndex]) {
            clearInterval(hoveredStates[projectIndex]);
        }
        setHoveredStates((prev) => {
            const newState = { ...prev };
            delete newState[projectIndex];
            return newState;
        });
        // Reset to first image when hover ends
        setCurrentImageIndexes((prev) => ({
            ...prev,
            [projectIndex]: 0,
        }));
    };

    const [currentImageIndexes, setCurrentImageIndexes] = useState(
        certifications.reduce((acc, _, index) => {
            acc[index] = 0;
            return acc;
        }, {})
    );

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
        hover: {
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    const overlayVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    sx={{
                        mb: 4,
                        fontWeight: 700,
                        background:
                            "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    }}
                >
                    My Projects
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Discover my web development achievements
                </Typography>
            </motion.div>

            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                {certifications.map((project, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onHoverStart={() => handleHoverStart(index)}
                            onHoverEnd={() => handleHoverEnd(index)}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                                    height: { xs: 280, sm: 320, md: 380 },
                                    backgroundColor: "#fff",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow:
                                            "0 12px 40px rgba(0,0,0,0.2)",
                                        transform: "translateY(-5px)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                >
                                    {project.ImagePreview.map(
                                        (preview, imgIndex) => (
                                            <motion.div
                                                key={imgIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity:
                                                        currentImageIndexes[
                                                            index
                                                        ] === imgIndex
                                                            ? 1
                                                            : 0,
                                                    transition: {
                                                        duration: 0.5,
                                                    },
                                                }}
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    display:
                                                        currentImageIndexes[
                                                            index
                                                        ] === imgIndex
                                                            ? "block"
                                                            : "none",
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={preview.image}
                                                    sx={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </motion.div>
                                        )
                                    )}
                                </Box>

                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                                        p: 2,
                                        color: "white",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1,
                                            textShadow:
                                                "2px 2px 4px rgba(0,0,0,0.3)",
                                        }}
                                    >
                                        {project.title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 0.5,
                                            mb: 1,
                                        }}
                                    >
                                        {project.tools.map((tool, idx) => (
                                            <Typography
                                                key={idx}
                                                variant="caption"
                                                sx={{
                                                    bgcolor:
                                                        "rgba(255,255,255,0.9)",
                                                    color: "#000",
                                                    px: 1,
                                                    py: 0.5,
                                                    borderRadius: "8px",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {tool}
                                            </Typography>
                                        ))}
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <motion.a
                                            href={project.repository}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            style={{
                                                color: "white",
                                                textDecoration: "none",
                                                padding: "4px 12px",
                                                borderRadius: "8px",
                                                background:
                                                    "rgba(255,255,255,0.1)",
                                                backdropFilter: "blur(4px)",
                                            }}
                                        >
                                            GitHub
                                        </motion.a>
                                        <motion.div whileHover={{ scale: 1.1 }}>
                                            <IconButton
                                                onClick={() =>
                                                    handleOpen(project)
                                                }
                                                sx={{
                                                    color: "white",
                                                    bgcolor:
                                                        "rgba(255,255,255,0.1)",
                                                    backdropFilter: "blur(4px)",
                                                    "&:hover": {
                                                        bgcolor:
                                                            "rgba(255,255,255,0.2)",
                                                    },
                                                }}
                                            >
                                                <VisibilityIcon />
                                            </IconButton>
                                        </motion.div>
                                    </Box>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        p: 3,
                        maxWidth: "90vw",
                        maxHeight: "90vh",
                        overflow: "auto",
                    }}
                >
                    {selectedProject && (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mb: 2,
                                }}
                            >
                                <Typography variant="h5">
                                    {selectedProject.title}
                                </Typography>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <Grid container spacing={2}>
                                {selectedProject.ImagePreview.map(
                                    (preview, idx) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={idx}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    delay: idx * 0.1,
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={preview.image}
                                                    sx={{
                                                        width: "100%",
                                                        borderRadius: 1,
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </motion.div>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </>
                    )}
                </Box>
            </Modal>
        </Container>
    );
}
