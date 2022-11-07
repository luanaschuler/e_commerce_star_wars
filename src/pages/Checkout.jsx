import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ThemeProvider,
  styled,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";

import Cart from "../components/Cart";
import Form from "../components/Form";
import theme from "../assets/global/theme";
import FeatherIcon from "feather-icons-react";
import { Colors } from "../assets/global/theme";

const ContainerTitle = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "2px 8px",
  height: "80px",
}));

const Checkout = ({ cart }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
        <ContainerTitle>
          <IconButton component={Link} to="/">
            <FeatherIcon icon="arrow-left" size={26} color={Colors.primary} />
          </IconButton>

          <Typography fontWeight="600" variant="h3" sx={{ ml: 2 }}>
            Voltar para Loja
          </Typography>
        </ContainerTitle>
        <Cart cart={cart} />
        <Form />
      </Container>
    </ThemeProvider>
  );
};

export default Checkout;
