import { ShoppingCartSharp } from "@mui/icons-material";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Box,
  Badge,
  Button,
} from "@mui/material";

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" color="ihherit" sx={{ flexGrow: 1 }}>
          Ecomm
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="shows cart items count"
            color="inherit"
          >
            <Badge badgeContent={1} color="error">
              <ShoppingCartSharp />
            </Badge>
          </IconButton>
        </Box>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
}
