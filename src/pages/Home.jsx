import React, { useState } from "react";
import { Container, ThemeProvider } from "@material-ui/core";

import Header from "../components/Header";
import Products from "../components/Products";
import Categories from "../components/Categories";
import theme from "../assets/global/theme";

const Home = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [catagoryName, setCategoryName] = useState("Pessoas");

  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Header cart={cart} />
      <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
        <Categories
          setProducts={setProducts}
          setCategoryName={setCategoryName}
        />
        <Products
          products={products}
          catagoryName={catagoryName}
          setCart={setCart}
          cart={cart}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
