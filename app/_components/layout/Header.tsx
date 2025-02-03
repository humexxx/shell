import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SIDEBAR_WIDTH } from "./Sidebar";

export const MAIN_HEADER_HEIGHT = 56;

interface Props {
  handleDrawerToggle: () => void;
}

const Header = ({ handleDrawerToggle }: Props) => {
  const theme = useTheme();
  //   const themeContext = useThemeContext();

  const themeContext = {
    toggleColorMode: () => {},
  };

  function handleLogout() {
    throw new Error("Function not implemented.");
  }

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        height: MAIN_HEADER_HEIGHT,
        width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        ml: { lg: `${SIDEBAR_WIDTH}px` },
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "background.paper",
        borderBottom: 1,
        borderBottomColor: "divider",
        // bgcolor: "hsla(0, 0%, 100%, 0.6)",
        // backdropFilter: "blur(50px)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: `${MAIN_HEADER_HEIGHT}px !important`,
          height: MAIN_HEADER_HEIGHT,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box flexGrow="1" display={"flex"} alignItems={"center"} />

        <IconButton
          sx={{ ml: 2 }}
          onClick={themeContext.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness4Icon />
          ) : (
            <Brightness7Icon />
          )}
        </IconButton>
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleLogout}
          sx={{ ml: 2 }}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
