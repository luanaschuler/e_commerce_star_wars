import { Typography, Card, Button, Box, styled } from "@material-ui/core";
import FeatherIcon from "feather-icons-react";

import babyYoda from "../assets/images/babyyoda.svg";

import { Colors } from "../assets/global/theme";

const ProductCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "70%",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    width: "60%",
    padding: "24px",
  },
}));

const ProductBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  backgroundColor: Colors.secondary,
}));

const ProductMetaWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "flex-start",

  padding: "8px 0px 10px 10px",
  justifyContent: "flex-start",
}));

const Type = styled(Typography)(() => ({
  color: Colors.light_grey,
}));

const ButtonAddToCart = styled(Button)(() => ({
  flex: 1,
  borderRadius: "5px",
  fontWeight: 600,
  height: "40px",
  p: 0,
  backgroundColor: Colors.primary,
}));

const Product = ({ product, catagoryName, setCart, cart }) => {
  const onAdd = () => {
    setCart([
      ...cart,
      {
        id: cart.length,
        name: product.name || product.title,
      },
    ]);
  };

  return (
    <ProductCard>
      <ProductImage src={babyYoda} />
      <ProductBox>
        <ProductMetaWrapper>
          <Type variant="h6">{catagoryName}</Type>
          <Typography variant="h5" fontWeight="500">
            {product.name || product.title}
          </Typography>
          <Typography variant="h4">
            <strong>R$ 10,00</strong>
          </Typography>
        </ProductMetaWrapper>
        <Box display={"flex"} alignItems="flex-end" sx={{ pr: 1, pb: 1 }}>
          <ButtonAddToCart onClick={onAdd}>
            <FeatherIcon icon="shopping-cart" size="24" color="#fff" />
          </ButtonAddToCart>
        </Box>
      </ProductBox>
    </ProductCard>
  );
};

export default Product;
