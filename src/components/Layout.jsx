import { CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  pallete: {
    mode: "dark",
  },
});

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header></header>
      <main></main>
      <footer></footer>
    </ThemeProvider>
  );
}
