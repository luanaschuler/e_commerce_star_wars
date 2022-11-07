import React from "react";
import {
  Box,
  styled,
  Typography,
  TextField,
  Checkbox,
  Button,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
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
  const { register, setValue, setFocus } = useForm();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setValue("street", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
        setFocus("add");
      });
  };

  return (
    <FormContainer>
      <Title>
        <Typography variant="h4">Informações para entrega</Typography>
      </Title>
      <form>
        <Typography variant="h5" htmlFor="name">
          Nome
        </Typography>
        <Inputs
          id="name"
          name="name"
          variant="outlined"
          fullWidth
          size="small"
        />

        <Typography variant="h5" htmlFor="cep">
          CEP
        </Typography>
        <Inputs
          id="cep"
          name="cep"
          type="text"
          {...register("cep")}
          variant="outlined"
          fullWidth
          size="small"
          onBlur={checkCEP}
        />
        <Box display="flex" justifyContent="space-between">
          <Box flex={2} sx={{ mr: 1 }}>
            <Typography variant="h5" htmlFor="city">
              Cidade
            </Typography>
            <Inputs
              id="city"
              name="city"
              variant="outlined"
              fullWidth
              size="small"
              {...register("city")}
            />
          </Box>
          <Box flex={1}>
            <Typography variant="h5" htmlFor="state">
              Estado
            </Typography>
            <Inputs
              id="state"
              name="state"
              variant="outlined"
              fullWidth
              {...register("state")}
              size="small"
            />
          </Box>
        </Box>
        <Typography variant="h5" htmlFor="neighborhood">
          Bairro
        </Typography>
        <Inputs
          id="neighborhood"
          name="neighborhood"
          variant="outlined"
          fullWidth
          {...register("neighborhood")}
          size="small"
        />
        <Typography variant="h5" htmlFor="street">
          Logradouro
        </Typography>
        <Inputs
          id="street"
          name="street"
          variant="outlined"
          {...register("street")}
          fullWidth
          size="small"
        />

        <Typography variant="h5" htmlFor="add">
          Complemento (opcional)
        </Typography>
        <Inputs
          id="add"
          name="add"
          variant="outlined"
          fullWidth
          size="small"
          {...register("add")}
        />

        <Typography variant="h5" htmlFor="ref">
          Ponto de referência (opcional)
        </Typography>
        <Inputs
          id="ref"
          name="ref"
          variant="outlined"
          fullWidth
          size="small"
          {...register("ref")}
        />

        <Box display="flex" alignItems="center">
          <CheckboxCustom {...label} checked />
          <Typography variant="h6">Salvar endereço</Typography>
        </Box>

        <Box display="flex">
          <CustomButtonOutlined variant="outlined">Voltar</CustomButtonOutlined>

          <CustomButton variant="contained" onClick={() => setTab("2")}>
            Continuar
          </CustomButton>
        </Box>
      </form>
    </FormContainer>
  );
};

export default DeliveryForm;
