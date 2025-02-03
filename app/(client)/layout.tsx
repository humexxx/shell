"use client";

import { Header } from "@/components/layout";
import { MAIN_HEADER_HEIGHT } from "@/components/layout/Header";
import Sidebar, { SIDEBAR_WIDTH } from "@/components/layout/Sidebar";
import { VERSION } from "@/lib/consts";
import { Box, Container, Drawer } from "@mui/material";
import { ReactNode, useState } from "react";

function ClientLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    <Box sx={{ display: "flex" }}>
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
          <Sidebar title="SHELL" version={VERSION} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: SIDEBAR_WIDTH,
            },
          }}
          open
        >
          <Sidebar title="SHELL" version={VERSION} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` },
          backgroundColor: "background.default",
          minHeight: `calc(100vh - ${MAIN_HEADER_HEIGHT}px)`,
          marginTop: `${MAIN_HEADER_HEIGHT}px`,
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default ClientLayout;
