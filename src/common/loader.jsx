"use client";
import { CircularProgress, Box } from "@mui/material";

const Loader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <CircularProgress
      size={70} 
      thickness={1} 
      sx={{ color: "#6865FF" }}
    />
  </Box>
);

export default Loader;
