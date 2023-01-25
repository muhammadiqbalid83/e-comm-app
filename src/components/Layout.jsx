import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Header from "./Header";
const theme = createTheme({
  pallete: {
    mode: "light",
  },
});
export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>displaying the content</main>
      <footer></footer>
    </ThemeProvider>
  );
}
