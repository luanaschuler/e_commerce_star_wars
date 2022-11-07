import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  styled,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import { Colors } from "../assets/global/theme";
import FeatherIcon from "feather-icons-react";

import Chewie from "../assets/images/Chewbacca-Fathead.svg";

const ProductsBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  height: "92px",
  backgroundColor: Colors.secondary,
  marginBottom: 1,
}));

const DrawerTitle = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
  color: Colors.dark_grey,
  marginBottom: "8px",
}));

const InputsDrawer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "8px",
}));

const DiscountBar = styled(TextField)(() => ({
  flexGrow: 2,
  marginRight: "8px",
  height: "40px",
  ".MuiOutlinedInput-root": {
    borderRadius: "5px",
    p: "10px 13px 10px 10px",
    justifyContent: "center",
  },
}));

const ButtonDiscount = styled(Button)(() => ({
  flex: 1,
  borderRadius: "5px",
  fontWeight: 600,
  height: "40px",
  p: 0,
  backgroundColor: Colors.light_grey,
}));

const ButtonCheckout = styled(Button)(() => ({
  flex: 1,
  borderRadius: "5px",
  fontWeight: 600,
  height: "40px",
  p: 0,
  backgroundColor: Colors.primary,
}));

const IconButtonActions = styled(Button)(() => ({
  borderRadius: "5px",
  height: "30px",
  p: 0,
  marginRight: "4px",
}));

const AlterationText = styled(Typography)(() => ({
  color: Colors.primary,
}));

const SidePanel = ({ cart }) => {
  const cartProducts = cart.map((item) => (
    <ProductsBox key={item.id}>
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
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="h6">Tamanho P. Cor: Verde</Typography>
            <AlterationText variant="h6">Alterar</AlterationText>
          </Box>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="h6" fontWeight="600">
              {item.name}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            <Typography variant="h4">R$ 10,00</Typography>
            <Box display="flex" justifyContent="space-between">
              <IconButtonActions variant="outlined"> - 01 +</IconButtonActions>
              <IconButtonActions variant="outlined">
                {" "}
                <FeatherIcon icon="trash" size={15} />
              </IconButtonActions>
            </Box>
          </Box>
        </Box>
      </ListItem>
    </ProductsBox>
  ));
  return (
    <React.Fragment>
      <DrawerTitle>
        <FeatherIcon icon="arrow-left" size={26} color={Colors.primary} />
        <Typography fontWeight="600" variant="h4">
          {" "}
          Meu carrinho
        </Typography>
      </DrawerTitle>
      {cart.length === 0 ? (
        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
          {" "}
          <img src={Chewie} alt="chewie" width="70%" />
          <Typography variant="h3">Seu Carrinho está vazio!</Typography>
        </Box>
      ) : (
        cartProducts
      )}
      <InputsDrawer>
        <Box display="flex" sx={{ mb: 1 }}>
          <DiscountBar
            label="Cupom de desconto"
            fullWidth
            variant="outlined"
            size="small"
          />
          <ButtonDiscount disabled>Aplicar</ButtonDiscount>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography>Frete</Typography>

          <strong>Calculado no Checkout</strong>
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
            <strong>R$ 00,00</strong>
          </Typography>
        </Box>
        <ButtonCheckout component={Link} to="/cart">
          Ir para checkout
        </ButtonCheckout>
      </InputsDrawer>
    </React.Fragment>
  );
};

export default SidePanel;
