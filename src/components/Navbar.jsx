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
            }}
        >
            <Typography
                variant="h6"
                sx={{ my: 2, fontFamily: "GrenzeGotisch" }}
            >
                🌱LKCode
            </Typography>
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
                                sx={{
                                    textAlign: "center",
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
            <AppBar
                component="nav"
                sx={{
                    width: "95%",
                    backdropFilter: "blur(10px)",
                    backgroundColor: "transparent",
                    position: "sticky",
                    borderRadius: "10px",
                    height: "100%",
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between", // Sépare le logo des liens
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

                    {/* Logo */}
                    <Box
                        component="img"
                        src="/assets/images/LKCode_transparent-.png"
                        alt="logo"
                        sx={{
                            display: { xs: "none", sm: "block" },
                            width: "100px",
                            height: "80px",
                        }}
                    />

                    {/* Liens de navigation */}
                    <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
                        {navItems.map((item) => (
                            <Link
                                to={getPath(item)}
                                key={item}
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    sx={{
                                        padding: "10px",
                                        color: "#fff",
                                        backgroundColor:
                                            activeItem === item
                                                ? "#1F509A"
                                                : "transparent",
                                    }}
                                    onClick={() => handleNavItemClick(item)}
                                >
                                    {item}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

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
