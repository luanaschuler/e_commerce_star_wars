import {
  Box,
  styled,
  Typography,
  Avatar,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemAvatar,
  Divider,
} from "@material-ui/core";
import React from "react";
import { Colors } from "../assets/global/theme";
import FeatherIcon from "feather-icons-react";

import Chewie from "../assets/images/Chewbacca-Fathead.svg";

const AccordionContainer = styled(Accordion)((theme) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  padding: "15px 10px",
  gap: "12px",
  p: 0,
  backgroundColor: Colors.secondary,
}));

const Details = styled(AccordionDetails)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px",
}));

const ProductsBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  height: "92px",
  backgroundColor: "#fff",
  marginBottom: 1,
}));

const DrawerTitle = styled(AccordionSummary)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
  color: Colors.primary,
}));

const InputsDrawer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "8px",
}));

const Cart = ({ cart }) => {
  return (
    <AccordionContainer>
      <DrawerTitle aria-controls="panel1a-content" id="panel1a-header">
        <Typography fontWeight="600" variant="h4">
          Resumo da compra
        </Typography>
        <FeatherIcon icon="chevron-down" size={26} color={Colors.primary} />
      </DrawerTitle>
      <Details>
        {cart.map((item) => (
          <ProductsBox>
            <ListItem display="flex" sx={{ flexDirection: "column" }}>
              <ListItemAvatar>
                <Avatar
                  alt={"Chewie"}
                  src={Chewie}
                  variant="square"
                  sx={{ width: 70, height: 60, ml: 2 }}
                />
              </ListItemAvatar>
              <Box display="flex" flexDirection="column" width="100%">
                <Box display="flex" justifyContent="flex-start" width="100%">
                  <Typography variant="h6"> 1x {item.name}</Typography>
                </Box>
                <Box display="flex" justifyContent="flex-start" width="100%">
                  <Typography variant="h6" fontWeight="600">
                    Tamanho P. Cor: Verde
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="flex-start" width="100%">
                  <Typography variant="h4">
                    <strong>R$ 00,00</strong>
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          </ProductsBox>
        ))}
        <InputsDrawer>
          <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
            <Typography>Frete</Typography>

            <strong>Padrão (Grátis)</strong>
          </Box>
          <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
            <Typography>Desconto</Typography>
            <strong>R$ 00,00</strong>
          </Box>
          <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
            <Typography>Sub-total</Typography>
            <strong>R$ 00,00</strong>
          </Box>
          <Divider />
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ mt: 1, mb: 1 }}
          >
            <Typography variant="h4">Valor total</Typography>
            <Typography variant="h4">
              <strong>R$ 000,00</strong>
            </Typography>
          </Box>
        </InputsDrawer>
      </Details>
    </AccordionContainer>
  );
};

export default Cart;
