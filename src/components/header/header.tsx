import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { NavMenu } from "../navMenu";
import Logo from "../logo/logo";

type Props = { window?: () => Window };

function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerWidth = 240;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Logo />
      <Divider />
      <NavMenu mobile />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ background: "#111111" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Logo />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavMenu />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "#1b1b1b",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Header;
