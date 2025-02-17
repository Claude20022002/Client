import {
    Container,
    Stack,
    Typography,
    TextField,
    Button,
    Box,
} from "@mui/material";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 4, md: 8 }}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Stack
                        spacing={4}
                        sx={{
                            width: { xs: "100%", md: "60%" },
                            alignItems: "center",
                            backgroundColor: "white",
                            padding: { xs: "20px", sm: "40px" },
                            borderRadius: "15px",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.3s ease-in-out",
                            transform:
                                "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                            "&:hover": {
                                transform:
                                    "perspective(1000px) rotateX(2deg) rotateY(-2deg) translateY(-5px)",
                                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                            },
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                background:
                                    "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                                mb: 2,
                            }}
                        >
                            Contact Me
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            textAlign="center"
                            sx={{ mb: 4 }}
                        >
                            Feel free to reach out through the form below.
                        </Typography>
                        <Stack
                            component={motion.form}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            spacing={3}
                            width="100%"
                        >
                            <TextField
                                label="Name"
                                name="name"
                                required
                                variant="outlined"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "&:hover fieldset": {
                                            borderColor: "#2196F3",
                                        },
                                    },
                                }}
                            />
                            <TextField
                                label="Email"
                                name="email"
                                required
                                variant="outlined"
                                fullWidth
                                type="email"
                            />
                            <TextField
                                label="Message"
                                name="message"
                                multiline
                                rows={6}
                                required
                                variant="outlined"
                                fullWidth
                            />
                            <Button
                                component={motion.button}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                variant="contained"
                                size="large"
                                endIcon={<SendIcon />}
                                sx={{
                                    background:
                                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                                    boxShadow:
                                        "0 3px 5px 2px rgba(33, 203, 243, .3)",
                                    height: 48,
                                }}
                            >
                                Send Message
                            </Button>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                mt: 4,
                                pt: 4,
                                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                                width: "100%",
                                justifyContent: "center",
                            }}
                        >
                            <motion.div whileHover={{ scale: 1.2 }}>
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
                                        color: "#666",
                                        fontSize: "28px",
                                        "&:hover": {
                                            color: "#4267B2",
                                        },
                                    }}
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
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
                                        color: "#666",
                                        fontSize: "28px",
                                        "&:hover": {
                                            color: "#E1306C",
                                        },
                                    }}
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
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
                                        color: "#666",
                                        fontSize: "28px",
                                        "&:hover": {
                                            color: "#333",
                                        },
                                    }}
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
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
                                        color: "#666",
                                        fontSize: "28px",
                                        "&:hover": {
                                            color: "#0077B5",
                                        },
                                    }}
                                />
                            </motion.div>
                        </Stack>
                    </Stack>

                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        sx={{
                            width: { xs: "100%", md: "40%" },
                            display: { xs: "none", sm: "block" },
                            position: "relative",
                            height: "600px",
                            perspective: "1000px",
                        }}
                    >
                        <Box
                            component="img"
                            src="/assets/svg/undraw_dev-productivity_5wps.svg"
                            alt="developer productivity"
                            sx={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "400px",
                                filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))",
                                animation: "float3D 6s ease-in-out infinite",
                                "@keyframes float3D": {
                                    "0%": {
                                        transform:
                                            "translateY(0px) rotateY(0deg) rotateX(0deg)",
                                    },
                                    "50%": {
                                        transform:
                                            "translateY(-20px) rotateY(5deg) rotateX(-5deg)",
                                    },
                                    "100%": {
                                        transform:
                                            "translateY(0px) rotateY(0deg) rotateX(0deg)",
                                    },
                                },
                                position: "absolute",
                                top: "0",
                                left: "0",
                                zIndex: 2,
                                transformStyle: "preserve-3d",
                            }}
                        />
                        <Box
                            component={motion.img}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            src="/assets/svg/undraw_pair-programming_9jyg.svg"
                            alt="pair programming"
                            sx={{
                                width: "80%",
                                height: "auto",
                                maxWidth: "320px",
                                filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))",
                                animation:
                                    "float3DReverse 7s ease-in-out infinite",
                                "@keyframes float3DReverse": {
                                    "0%": {
                                        transform:
                                            "translateY(0px) rotateY(0deg) rotateX(0deg)",
                                    },
                                    "50%": {
                                        transform:
                                            "translateY(20px) rotateY(-5deg) rotateX(5deg)",
                                    },
                                    "100%": {
                                        transform:
                                            "translateY(0px) rotateY(0deg) rotateX(0deg)",
                                    },
                                },
                                position: "absolute",
                                top: "45%",
                                right: "10%",
                                zIndex: 1,
                                transformStyle: "preserve-3d",
                            }}
                        />
                    </Box>
                </Stack>
            </motion.div>
        </Container>
    );
}
