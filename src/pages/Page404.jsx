import { motion } from "framer-motion";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Page404() {
    const navigate = useNavigate();

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const imageVariants = {
        initial: { scale: 0.8, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                yoyo: Infinity,
            },
        },
    };

    return (
        <Container
            maxWidth="lg"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 4,
            }}
        >
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                style={{
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            background:
                                "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            mb: 2,
                            fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                        }}
                    >
                        404
                    </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 3,
                            color: "text.secondary",
                            fontSize: { xs: "1.5rem", sm: "2rem" },
                        }}
                    >
                        Page Not Found
                    </Typography>
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                    style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        padding: "2rem",
                    }}
                >
                    <Box
                        component="img"
                        src="/assets/svg/undraw_page-not-found_6wni.svg"
                        alt="404 illustration"
                        sx={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "400px",
                            filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))",
                        }}
                    />
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    style={{ marginTop: "2rem" }}
                >
                    <Button
                        variant="contained"
                        startIcon={<ArrowBackIcon />}
                        onClick={() => navigate("/")}
                        sx={{
                            background:
                                "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                            borderRadius: "12px",
                            padding: "12px 24px",
                            fontSize: "1.1rem",
                            textTransform: "none",
                            boxShadow: "0 3px 15px rgba(33, 150, 243, 0.3)",
                            "&:hover": {
                                boxShadow: "0 6px 20px rgba(33, 150, 243, 0.4)",
                            },
                        }}
                    >
                        Back to Home
                    </Button>
                </motion.div>
            </motion.div>
        </Container>
    );
}
