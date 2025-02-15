import { UserButton } from "@clerk/nextjs";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";

import EThemes from "@/lib/theme/EThemes";
import { useThemeContext } from "@/lib/theme/useThemeContext";

import { SIDEBAR_WIDTH } from "./Sidebar";

export const MAIN_HEADER_HEIGHT = 56;

interface Props {
  handleDrawerToggle: () => void;
}

const Header = ({ handleDrawerToggle }: Props) => {
  const themeContext = useThemeContext();

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        height: MAIN_HEADER_HEIGHT,
        width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        ml: { lg: `${SIDEBAR_WIDTH}px` },
        display: "flex",
        justifyContent: "space-between",
        // bgcolor: "hsla(0, 0%, 100%, 0.6)",
        // backdropFilter: "blur(50px)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: `${MAIN_HEADER_HEIGHT}px !important`,
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
          {themeContext.theme === EThemes.Dark ? (
            <Brightness4Icon />
          ) : (
            <Brightness7Icon />
          )}
        </IconButton>
        <Box ml={2} display={'flex'} alignItems={'center'}>
          <UserButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
