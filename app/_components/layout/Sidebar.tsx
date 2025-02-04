import { Fragment, ReactNode } from "react";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";
import Link from "next/link";
import { AdminRender } from "../auth";
import { MAIN_HEADER_HEIGHT } from "./Header";

interface IRoute {
  text: string;
  icon: ReactNode;
  href: string;
}

interface ISectionRoutes {
  title: string;
  routes: IRoute[];
}

const mainRoutes: IRoute[] = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    href: "/dashboard",
  },
];

const secondarySection: ISectionRoutes = {
  title: "Secondary",
  routes: [
    {
      text: "Another Route",
      icon: <DashboardIcon />,
      href: "/another-route",
    },
  ],
};

const sections: ISectionRoutes[] = [secondarySection];

export const SIDEBAR_WIDTH = 240;

const Sidebar = ({ title, version }: { title: string; version: string }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} height={"100%"}>
      <Toolbar
        sx={{
          minHeight: `${MAIN_HEADER_HEIGHT}px !important`,
        }}
      >
        <Stack direction="row" spacing={1} alignItems={"center"} px={1}>
          <Typography variant="h6" component="div">
            {title}{" "}
          </Typography>
          <Typography variant="caption">({version})</Typography>
        </Stack>
      </Toolbar>
      <Divider />

      <Box px={1} flexGrow={1} display={"flex"} flexDirection={"column"}>
        <List dense>
          {mainRoutes.map(({ text, icon, href }) => (
            <ListItem key={text}>
              <ListItemButton
                sx={{ borderRadius: 2 }}
                selected={location.pathname.includes(href)}
                component={Link}
                href={href}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {sections.map(({ title, routes }, i) => (
          <Fragment key={title}>
            <List dense sx={{ flexGrow: i === sections.length - 1 ? 1 : 0 }}>
              <ListItem>
                <Typography variant="caption" ml={2}>
                  {title}
                </Typography>
              </ListItem>
              {routes.map(({ text, icon, href }) => (
                <ListItem key={text}>
                  <ListItemButton
                    sx={{ borderRadius: 2 }}
                    selected={location.pathname.includes(href)}
                    component={Link}
                    href={href}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Fragment>
        ))}

        <List dense>
          <AdminRender>
            <ListItem>
              <ListItemButton
                sx={{ borderRadius: 2 }}
                selected={location.pathname.includes("/admin")}
                component={Link}
                href="/admin"
              >
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Admin" />
              </ListItemButton>
            </ListItem>
          </AdminRender>
          <ListItem>
            <ListItemButton
              sx={{ borderRadius: 2 }}
              selected={location.pathname.includes("/settings")}
              component={Link}
              href="/settings"
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
