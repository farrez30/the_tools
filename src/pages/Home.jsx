import { Box, Typography } from "@mui/material";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";



export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography paragraph>Tools Exercise</Typography>
        <Typography paragraph>
          Welcome,
          <br />
          tools are inside the sidebar
          <br /> ⬅️ ⬅️ ⬅️
        </Typography>
      </Box>
    </Box>
  );
}
