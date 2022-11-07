import React from "react";
import { Box, Container, Grid, Typography, styled } from "@material-ui/core";
import Product from "./Product";
import { Colors } from "../assets/global/theme";

const ProductsTitle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "4px",
}));
const More = styled(Typography)(() => ({
  color: Colors.primary,
}));

const Products = ({ products, catagoryName, cart, setCart }) => {
  const renderProducts = products.map((product) => (
    <Grid item xs={12} sm={6} md={3} key={product.name} display="flex">
      <Product
        product={product}
        catagoryName={catagoryName}
        setCart={setCart}
        cart={cart}
      />
    </Grid>
  ));

  return (
    <Container>
      <ProductsTitle>
        <Box display="flex" flexDirection="column">
          <Typography variant="h2">
            <strong>Mais Vendidos</strong>
          </Typography>
          <Typography variant="h5">{catagoryName}</Typography>
        </Box>

        <More variant="h4">Ver mais</More>
      </ProductsTitle>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 4px" }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
};

export default Products;
