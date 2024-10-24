import React from "react";
import {
  Stack,
  Link,
  Toolbar,
  Typography,
  Container,
  AppBar,
} from "@mui/material";
const pages = [
  { name: "Products", id: "products" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];
const Navbar = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6">My App</Typography>
            <Stack direction="row" gap={3}>
              {pages.map(page => (
                <Link
                  key={page.id}
                  sx={{
                    color: { xs: "primary", sm: "white" },
                  }}
                >
                  {page.name}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;