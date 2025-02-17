import { motion } from "framer-motion";
import { useState } from "react";
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
            tools: ["React JS", "Node.js", "MongoDB", "Express", "MUI", "CSS"],
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
    ];

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    align="center"
                    sx={{
                        mb: 6,
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
                    sx={{ mb: 8 }}
                >
                    Discover my web development achievements
                </Typography>
            </motion.div>

            <Grid container spacing={4}>
                {certifications.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    boxShadow: 3,
                                    height: 300,
                                    "&:hover .project-info": {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={project.ImagePreview[0].image}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                                <Box
                                    className="project-info"
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        bgcolor: "rgba(0,0,0,0.8)",
                                        opacity: 0,
                                        transition: "opacity 0.3s",
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        gutterBottom
                                    >
                                        {project.title}
                                    </Typography>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography
                                            variant="body2"
                                            color="white"
                                        >
                                            Technologies used:
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 0.5,
                                                mt: 1,
                                            }}
                                        >
                                            {project.tools.map((tool, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            bgcolor:
                                                                "primary.main",
                                                            px: 1,
                                                            py: 0.5,
                                                            borderRadius: 1,
                                                        }}
                                                    >
                                                        {tool}
                                                    </Typography>
                                                </motion.div>
                                            ))}
                                        </Box>
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
                                            whileHover={{ scale: 1.1 }}
                                            style={{
                                                color: "white",
                                                textDecoration: "none",
                                            }}
                                        >
                                            GitHub
                                        </motion.a>
                                        <IconButton
                                            onClick={() => handleOpen(project)}
                                            sx={{ color: "white" }}
                                        >
                                            <VisibilityIcon />
                                        </IconButton>
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
