import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
  Drawer,
  List,
  styled,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import FeatherIcon from "feather-icons-react";

import swarsimg from "../assets/images/Vector.png";
import { Colors } from "../assets/global/theme";
import SidePanel from "./SidePanel";

const AppBarContainer = styled(AppBar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
  height: "80px",
  backgroundColor: Colors.dark_grey,
}));

const AppBarHeader = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  justifyContent: "center",
  alignItems: "center",
}));

const SearchBar = styled(TextField)(() => ({
  position: "relative",
  marginLeft: 10,
  flexGrow: 3,
  display: "flex",
  "& .MuiFilledInput-root": {
    background: "#ffffff",
    borderRadius: "5px",
    height: "40px",
  },
}));

export default function Header({ cart }) {
  const theme = useTheme();
  const showLogo = useMediaQuery(theme.breakpoints.up("sm"));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  console.log("cart do header", cart, cart.length);

  return (
    <AppBarContainer>
      <AppBarHeader type="row">
        <IconButton size="medium" edge="start" sx={{ mr: 2 }}>
          <FeatherIcon icon="align-justify" size="24" color="#fff" />
        </IconButton>
        {showLogo && (
          <img
            src={swarsimg}
            alt={"swarsimg"}
            sx={{
              height: "70px",
              width: "90px",
            }}
          />
        )}

        <SearchBar
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ p: 0 }}>
                  <FeatherIcon icon="search" size="20" color={Colors.primary} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <IconButton
          size="medium"
          aria-label="shopping-cart"
          color="inherit"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Badge badgeContent={cart.length} color="error">
            <FeatherIcon icon="shopping-cart" size={26} color="#fff" />
          </Badge>
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box
            p={2}
            sx={{ width: { xs: "321px", sm: "497px", lg: "683px" } }}
            role="presentation"
            textAlign="center"
          >
            <SidePanel cart={cart} />
          </Box>
        </Drawer>
      </AppBarHeader>
    </AppBarContainer>
  );
}
