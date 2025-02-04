import { APP_TITLE } from "@/lib/consts";
import { Box, Container, Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Dashboard - ${APP_TITLE}`,
  description: "Find a summary of all your activities here.",
};


const Dashboard = () => {
  return (
    <>
      <Box
        component={"section"}
        sx={{
          bgcolor: "black",
          borderRadius: {
            md: 0,
            lg: 4,
          },
          mx: {
            md: 0,
            lg: 2,
          },
        }}
      >
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography variant="h6" component="h1" color="common.white">
            Dashboard
          </Typography>
          <Box height={300}></Box>
        </Container>
      </Box>
      <Box component={"section"}>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography variant="h6" component="h1">
            Some other content
          </Typography>
          <Box height={300}></Box>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
