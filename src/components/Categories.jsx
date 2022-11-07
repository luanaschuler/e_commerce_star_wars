import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  styled,
  Container,
  Grid,
} from "@material-ui/core";
import { categoriesList } from "./data";
import starWars from "../assets/images/Vector.png";
import { Colors } from "../assets/global/theme";

const CategoriesContainer = styled(Box)(() => ({
  display: "flex",
  marginBottom: "12px",
  width: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: "100px",
}));

const CategoriesCards = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: Colors.secondary,
  color: Colors.dark_grey,

  fontSize: "12px",
}));

const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));

const CategoriesTitle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "12px",
}));

const More = styled(Typography)(() => ({
  color: Colors.primary,
}));

const CategoryName = styled(Box)(() => ({
  color: Colors.dark_grey,
  display: "flex",
  justifyContent: "center",
}));

const Categories = ({ setProducts, setCategoryName }) => {
  const [categorie, setCategorie] = useState("people");
  const [flag, setFlag] = useState(true);
  // const [loading, setLoading] = useState(true);

  const renderCategories = categoriesList.map((cat) => (
    <Grid item xs={6} sm={2} md={2} key={cat.id} display="flex">
      <CategoriesCards
        key={cat.id}
        onClick={() => {
          setCategorie(`${cat.cat}`);
          setCategoryName(`${cat.categorie}`);
          setFlag(!flag);
        }}
      >
        <ProductImage src={starWars} />
        <CategoryName>
          <Typography>{cat.categorie}</Typography>
        </CategoryName>
      </CategoriesCards>
    </Grid>
  ));

  useEffect(() => {
    async function fetchCategorie() {
      let res = await fetch(`http://swapi.dev/api/${categorie}/`);
      let data = await res.json();
      setProducts(data.results);
    }
    fetchCategorie();
  }, [categorie, setProducts]);

  return (
    <Container>
      <CategoriesContainer>
        <CategoriesTitle>
          <Box display="flex" flexDirection="column">
            <Typography variant="h2">
              <strong>Categorias</strong>
            </Typography>
          </Box>
          <More variant="h4">Ver mais</More>
        </CategoriesTitle>

        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          sx={{ margin: "20px 4px 10px 4px" }}
        >
          {renderCategories}
        </Grid>
      </CategoriesContainer>
    </Container>
  );
};

export default Categories;
