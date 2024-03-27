import React, { useState } from "react";
import Feed from "./Components/Feed";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";
import { Box, Container, Stack, createTheme } from "@mui/material";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "@emotion/react";

export default function App() {
  const [mode, setMode] = useState("dark");
  const darkMode = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider theme={darkMode}>
      <Box bgcolor={'background.default'} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
