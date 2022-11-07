import React from "react";
import {
  Box,
  styled,
  Typography,
  TextField,
  Checkbox,
  Button,
  Divider,
} from "@material-ui/core";
import { Colors } from "../assets/global/theme";

const FormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  padding: "15px 10px",
  gap: "12px",
  p: 0,
  backgroundColor: Colors.secondary,
}));

const Title = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const Inputs = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    background: "#ffffff",
    borderRadius: "5px",
    border: "1px solid",
    borderColor: Colors.light_grey,
    height: "40px",
  },
  marginBottom: "8px",
}));

const CheckboxCustom = styled(Checkbox)(() => ({
  color: Colors.light_grey,
  "&.Mui-checked": {
    color: Colors.primary,
  },
}));

const CustomButton = styled(Button)(() => ({
  flex: 1,
  borderRadius: "5px",
  fontWeight: 600,
  height: "37px",
  backgroundColor: Colors.primary,
}));

const CustomButtonOutlined = styled(Button)(() => ({
  flex: 1,
  borderRadius: "5px",
  fontWeight: 600,
  height: "37px",
  marginRight: "8px",
}));

const DeliveryForm = ({ setTab }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <FormContainer>
      <Title>
        <Typography variant="h4">Dados do cartão</Typography>
      </Title>
      <form>
        <Typography variant="h5" htmlFor="card">
          Número do cartão
        </Typography>
        <Inputs
          id="card"
          name="card"
          type="number"
          variant="outlined"
          fullWidth
          size="small"
        />

        <Typography variant="h5" htmlFor="name">
          Nome no cartão
        </Typography>
        <Inputs
          id="name"
          name="name"
          variant="outlined"
          fullWidth
          size="small"
        />
        <Box display="flex" justifyContent="space-between">
          <Box flex={1} sx={{ mr: 1 }}>
            <Typography variant="h5" htmlFor="date">
              Data de validade
            </Typography>
            <Inputs
              id="date"
              name="date"
              type="number"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Box>
          <Box flex={1}>
            <Typography variant="h5" htmlFor="cvv">
              CVV
            </Typography>
            <Inputs
              id="cvv"
              name="cvv"
              type="number"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <CheckboxCustom {...label} checked />
          <Typography variant="h6">Salvar cartão</Typography>
        </Box>
        <Divider />

        <Box display="flex">
          <CustomButtonOutlined variant="outlined">Voltar</CustomButtonOutlined>

          <CustomButton variant="contained">Finalizar Compra</CustomButton>
        </Box>
      </form>
    </FormContainer>
  );
};

export default DeliveryForm;
