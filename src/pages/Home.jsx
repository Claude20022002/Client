import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SplitText from "../components/SplitText/SplitText";
import Typewriter from "typewriter-effect";
import "./home.css";
import { motion } from "framer-motion";

export default function Home() {
    const navigate = useNavigate();

    const handleAnimationComplete = () => {
        console.log("Toutes les lettres ont été animées !");
    };

    return (
        <Stack
            className="home"
            sx={{
                marginTop: { xs: "20px", sm: "40px" },
                boxSizing: "border-box",
                overflow: "hidden",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                maxWidth: "1200px",
                mx: "auto",
                pb: { xs: "40px", sm: "60px" },
            }}
        >
            <Stack
                className="section-1"
                component="section"
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: { xs: "40px", sm: "20px" },
                    padding: {
                        xs: "20px 16px",
                        sm: "40px 24px",
                    },
                }}
            >
                {/* Texte et CTA */}
                <Box
                    className="box-1"
                    sx={{
                        width: { xs: "100%", sm: "60%" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: { xs: "center", sm: "flex-start" },
                        alignItems: { xs: "center", sm: "flex-start" },
                    }}
                >
                    <SplitText
                        text="Qui suis-je ?"
                        className="text-2xl font-semibold box-1"
                        delay={100}
                        animationFrom={{
                            opacity: 0,
                            transform: "translate3d(0,50px,0)",
                        }}
                        animationTo={{
                            opacity: 1,
                            transform: "translate3d(0,0,0)",
                        }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                        taille="h1"
                        fontSize={{
                            xs: "3rem",
                            sm: "4.5rem",
                            md: "5.5rem",
                        }}
                    />
                    <Typography
                        variant="h2"
                        sx={{
                            marginTop: "20px",
                            fontSize: {
                                xs: "1.5rem",
                                sm: "2.0rem",
                                md: "2.5rem",
                            },
                            fontWeight: "bold",
                            background:
                                "linear-gradient(90deg, #1a6557, #569d7f, #63b45e, #a4bf85)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: [
                                    "LUSAMOTE KIMFUTA",
                                    "Développeur Web Junior",
                                ],
                            }}
                        />
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#fff" }}>
                        Déterminé, sérieux, autonome et curieux. Je suis
                        passionné par le développement web et la création de
                        sites web. Afin de faire du développement web une
                        compétence, je mets à jour mes connaissances en suivant
                        des cours en ligne et en pratiquant...
                    </Typography>
                    <Stack
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "10px",
                            marginTop: "10%",
                            width: "250px",
                        }}
                    >
                        <Button
                            onClick={() => navigate("/projets")}
                            variant="outlined"
                            color="primary"
                            sx={{
                                padding: "10px",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                textAlign: "center",
                                width: "100%",
                                margin: "10px 0",
                            }}
                        >
                            View my projets
                        </Button>
                        {/* Réseaux sociaux */}
                        <Stack
                            className="box-1-button-2 reseaux"
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <FacebookIcon
                                onClick={() =>
                                    window.open(
                                        "https://www.facebook.com/share/1Yj7qNMj4b/?mibextid=wwXIfr",
                                        "_blank"
                                    )
                                }
                                sx={{
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.2)",
                                        color: "#4267B2",
                                    },
                                }}
                            />
                            <InstagramIcon
                                onClick={() =>
                                    window.open(
                                        "https://www.instagram.com/kimfuta_lusamote/",
                                        "_blank"
                                    )
                                }
                                sx={{
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.2)",
                                        color: "#E1306C",
                                    },
                                }}
                            />
                            <GitHubIcon
                                onClick={() =>
                                    window.open(
                                        "https://github.com/Claude20022002",
                                        "_blank"
                                    )
                                }
                                sx={{
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.2)",
                                        color: "#333",
                                    },
                                }}
                            />
                            <LinkedInIcon
                                onClick={() =>
                                    window.open(
                                        "https://www.linkedin.com/in/lusamote-kimfuta-b20000250/",
                                        "_blank"
                                    )
                                }
                                sx={{
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.2)",
                                        color: "#0077B5",
                                    },
                                }}
                            />
                        </Stack>
                    </Stack>
                </Box>

                {/* Image de la section */}
                <Box
                    className="box-2"
                    sx={{
                        width: { xs: "100%", sm: "35%" },
                        height: { xs: "auto", sm: "auto", md: "600px" },
                        borderRadius: "76% 24% 81% 19% / 31% 59% 41% 69%",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <Box
                            component="img"
                            src="/assets/images/IMG_7418.JPG"
                            alt="image"
                            sx={{
                                borderRadius:
                                    "76% 24% 81% 19% / 31% 59% 41% 69%",
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                boxShadow:
                                    "15px 15px 17px 0 rgba(0, 0, 0, 0.5)",
                            }}
                        />
                    </motion.div>
                </Box>
            </Stack>
        </Stack>
    );
}
