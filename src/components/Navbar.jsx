import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const drawerWidth = 240;
const navItems = ["Home", "Projets", "About me", "Contact"];

function Navbar(props) {
    // Utilise la prop window si fournie, sinon l'objet global window
    const { window: windowProp } = props;
    const navWindow = windowProp || window;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    // Initialiser activeItem en fonction de l'URL actuelle
    const [activeItem, setActiveItem] = React.useState(() => {
        const path = navWindow.location.pathname;
        if (path === "/") return "Home";
        return path.substring(1).charAt(0).toUpperCase() + path.substring(2);
    });

    // Mettre à jour activeItem lors des changements d'URL
    React.useEffect(() => {
        const path = navWindow.location.pathname;
        if (path === "/") {
            setActiveItem("Home");
        } else {
            const page =
                path.substring(1).charAt(0).toUpperCase() + path.substring(2);
            setActiveItem(page);
        }
    }, [navWindow.location.pathname]);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavItemClick = (item) => {
        setActiveItem(item);
    };

    const getPath = (item) => {
        switch (item) {
            case "Home":
                return "/";
            case "About me":
                return "/about-me";
            default:
                return `/${item.toLowerCase()}`;
        }
    };

    const drawer = (
        <Box
            className="drawerNav"
            onClick={handleDrawerToggle}
            sx={{
                textAlign: "center",
                background: "rgb(51 53 117 / 98%)",
                color: "#fff",
                height: "100%",
            }}
        >
            <Box
                component="img"
                src="/assets/images/LKCode_transparent-.png"
                alt="logo"
                sx={{
                    display: "block",
                    width: "100px",
                    height: "80px",
                    margin: "10px auto",
                }}
            />
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <Link
                            to={getPath(item)}
                            style={{
                                textDecoration: "none",
                                width: "100%",
                                color: "#fff",
                            }}
                        >
                            <ListItemButton
                                className="drawerNavItem"
                                sx={{
                                    textAlign: "center",
                                    height: "100%",
                                    backgroundColor:
                                        activeItem === item
                                            ? "#1F509A"
                                            : "transparent",
                                }}
                                onClick={() => handleNavItemClick(item)}
                            >
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        windowProp !== undefined ? () => windowProp().document.body : undefined;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: "10px",
            }}
        >
            <CssBaseline />
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                }}
                style={{ width: "95%" }}
            >
                <AppBar
                    component="nav"
                    sx={{
                        width: "100%",
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(31, 80, 154, 0.1)",
                        position: "sticky",
                        borderRadius: "10px",
                        height: "100%",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                >
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {/* Bouton hamburger pour mobile */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Box
                                component="img"
                                src="/assets/images/LKCode_transparent-.png"
                                alt="logo"
                                sx={{
                                    display: { xs: "block", sm: "block" },
                                    width: "100px",
                                    height: "80px",
                                }}
                            />
                        </motion.div>

                        <Box
                            sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}
                        >
                            {navItems.map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to={getPath(item)}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            sx={{
                                                padding: "10px 20px",
                                                color: "#fff",
                                                backgroundColor:
                                                    activeItem === item
                                                        ? "rgba(31, 80, 154, 0.8)"
                                                        : "transparent",
                                                transition: "all 0.3s ease",
                                                position: "relative",
                                                overflow: "hidden",
                                                "&::before": {
                                                    content: '""',
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    background:
                                                        "rgba(31, 80, 154, 0.2)",
                                                    transform: "scaleX(0)",
                                                    transformOrigin: "right",
                                                    transition:
                                                        "transform 0.3s ease",
                                                },
                                                "&:hover": {
                                                    backgroundColor:
                                                        "rgba(31, 80, 154, 0.5)",
                                                    "&::before": {
                                                        transform: "scaleX(1)",
                                                        transformOrigin: "left",
                                                    },
                                                },
                                                "&:focus": {
                                                    outline:
                                                        "2px solid #1F509A",
                                                    outlineOffset: "2px",
                                                },
                                                borderRadius: "8px",
                                                fontWeight: "500",
                                                letterSpacing: "0.5px",
                                                textTransform: "none",
                                            }}
                                            onClick={() =>
                                                handleNavItemClick(item)
                                            }
                                        >
                                            {item}
                                        </Button>
                                    </Link>
                                </motion.div>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </motion.div>

            {/* Drawer pour mobile */}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Pour de meilleures performances sur mobile
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;
