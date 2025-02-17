import { Box } from "@mui/material";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <Box
            component="header"
            className="header"
            sx={{
                width: "100%",
                marginBottom: "10px",
            }}
        >
            <Navbar />
        </Box>
    );
}
