"use client";

import { Box, CssBaseline, Drawer } from "@mui/material";
import { ReactNode, useState } from "react";

import { Header } from "@/components/layout";
import { MAIN_HEADER_HEIGHT } from "@/components/layout/Header";
import Sidebar, { SIDEBAR_WIDTH } from "@/components/layout/Sidebar";
import { APP_TITLE, VERSION } from "@/lib/consts";
import EThemes from "@/lib/theme/EThemes";
import ThemeProvider from "@/lib/theme/ThemeProvider";
import { useThemeContext } from "@/lib/theme/useThemeContext";

function ClientLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const themeContext = useThemeContext();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor:
          themeContext.theme === EThemes.Light
            ? "#fafafa"
            : "background.default",
      }}
    >
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { lg: SIDEBAR_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: SIDEBAR_WIDTH,
            },
          }}
        >
          <Sidebar title={APP_TITLE} version={VERSION} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: SIDEBAR_WIDTH,
              bgcolor: "transparent",
            },
          }}
          open
        >
          <Sidebar title={APP_TITLE} version={VERSION} />
        </Drawer>
      </Box>
      <Box
        component={"main"}
        sx={{
          flexGrow: 1,
          width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` },
          minHeight: `calc(100vh - ${MAIN_HEADER_HEIGHT}px)`,
          marginTop: `${MAIN_HEADER_HEIGHT}px`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

const ClientLayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ClientLayout>{children}</ClientLayout>
    </ThemeProvider>
  );
};

export default ClientLayoutWrapper;
